import React from 'react';
import './index.scss';
import _ from 'lodash';
import {useDispatch, useSelector} from "react-redux";
import PaperItem from "../../components/PaperItem";
import SearchBox from "../../components/SearchBox";
import SpinnerContainer from "../../components/Spinner";
import {
    savePaperAction,
    searchPapersAction,
    setSearchPapersAction
} from "../../redux/reducers/SearchPapersReducer/actions";
import {
    removePaperAction,
} from "../../redux/reducers/CategoriesReducer/actions";
import Pagination from "../../components/Pagination";
import {RESULTS_PER_PAGE} from "./constants";
import SelectCategoryModal from "../../components/SelectCategoryModal";
import {findCategoryByPaperId} from "../../services/findCategoryByPaperId";
import {addPaperAction, addSearchAction, deletePaperAction} from "../../redux/reducers/UserReducer/actions";
import MessageAlert from "../../components/Alert";

function SearchPaperListContainer(props) {
    const categories = useSelector(state => state.user.categories);
    const papers = useSelector(state => state.searchPapers);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = React.useState(false);
    const [currentPage, setCurrentPage] = React.useState(0);
    const [isLastPage, setIsLastPage] = React.useState(false);
    const [currentSearchIncTags, setCurrentSearchIncTags] = React.useState([]);
    const [currentSearchExcTags, setCurrentSearchExcTags] = React.useState([]);
    const [isModalOpen, setModalOpen] = React.useState(false);
    const [selectedPaperId, setSelectedPaperId] = React.useState(null);
    const [error, setError] = React.useState(null);

    const onSearchPapersSuccess = (response) => {
        setIsLoading(false);
        const error = response.data.error;
        if (error) {
            setError(error)
        }
        const papers = response.data.papers;
        if (papers.length < RESULTS_PER_PAGE) {
            setIsLastPage(true);
        }
        dispatch(setSearchPapersAction(papers));

        if (response.data.search) {
            dispatch(addSearchAction(response.data.search));
        }
    };

    const onSearchPapersFailed = (err) => {
        setIsLoading(false);
        console.log(err);
    };

    const onSearchButtonClicked = (searchIncTags, searchExcTags, saveSearch, searchName) => {
        if (_.isEmpty(searchIncTags)) {
            setError('You must fill at least one include tags for searching');
        } else {

            if (saveSearch && _.isEmpty(searchName)) {
                searchName = searchIncTags.join();
            }

            setIsLoading(true);
            setCurrentPage(0);
            setCurrentSearchIncTags(searchIncTags);
            setCurrentSearchExcTags(searchExcTags);
            setIsLastPage(false);
            dispatch(searchPapersAction({
                data: {
                    includeList: searchIncTags,
                    excludeList: searchExcTags,
                    start: 0,
                    maxResults: RESULTS_PER_PAGE,
                    saveSearch: saveSearch,
                    searchName: searchName
                },
                onSuccess: onSearchPapersSuccess,
                onError: onSearchPapersFailed
            }));
            setError(null);
        }
    };

    const onSavePapersSuccess = (categoryId, response) => {
        setSelectedPaperId(null);
        setIsLoading(false);
        dispatch(addPaperAction(categoryId, response.data));
    };

    const onSavePapersFailed = (err) => {
        setSelectedPaperId(null);
        setIsLoading(false);
        console.log(err);
    };

    const onSelectCategoryClicked = categoryId => {
        const item = papers.find(paper => paper.paperId === selectedPaperId);
        if (item) {
            dispatch(savePaperAction({
                data: {paper: item, categoryId},
                onSuccess: response => onSavePapersSuccess(categoryId, response),
                onError: onSavePapersFailed
            }));
        }
        setModalOpen(false);
    };

    const onSaveButtonClicked = itemId => {
        setSelectedPaperId(itemId);
        setModalOpen(true);
    };

    const onRemovePapersSuccess = (categoryId, response) => {
        setIsLoading(false);
        dispatch(deletePaperAction(categoryId, response.data));
    };

    const onRemovePapersFailed = (err) => {
        setIsLoading(false);
        console.log(err);
    };

    const onRemoveButtonClicked = (itemId) => {
        const category = findCategoryByPaperId(categories, itemId);
        if (category) {
            const categoryId = category._id;
            dispatch(removePaperAction({
                data: {paperId: itemId, categoryId},
                onSuccess: response => onRemovePapersSuccess(categoryId, response),
                onError: onRemovePapersFailed
            }));
        }

    };

    const onChangePage = (nextPage) => {
        if (!_.isEmpty(currentSearchIncTags) || !_.isEmpty(currentSearchExcTags)) {
            setIsLoading(true);
            setCurrentPage(nextPage);
            setIsLastPage(false);

            const startPage = nextPage * RESULTS_PER_PAGE;
            dispatch(searchPapersAction({
                data: {
                    includeList: currentSearchIncTags,
                    excludeList: currentSearchExcTags,
                    start: startPage,
                    maxResults: RESULTS_PER_PAGE
                },
                onSuccess: onSearchPapersSuccess,
                onError: onSearchPapersFailed
            }));
        }
    };


    const paperElements = papers.map(paper => {
        const publishedDate = new Date(paper.published).toDateString();
        const updatedDate = new Date(paper.updated).toDateString();
        const paperExist = categories.find(category => !!category.paperItems.find(p => p.paperId === paper.paperId));

        return <PaperItem
            id={paper.paperId}
            key={paper.paperId}
            title={paper.title}
            summary={paper.summary}
            authors={paper.authors}
            publishedDate={publishedDate}
            updatedDate={updatedDate}
            pdfLink={paper.pdfLink}
            onSaveButtonClicked={onSaveButtonClicked}
            onRemoveButtonClicked={onRemoveButtonClicked}
            paperExist={!!paperExist}
        />
    });

    const pagination = (!isLoading && papers.length > 0) ?
        <Pagination page={currentPage} onChangePage={onChangePage} isLastPage={isLastPage}/> : null;

    return (
        <div className="papers_container">
            <SearchBox onSearchButtonClicked={onSearchButtonClicked}/>
            <MessageAlert error={error}/>
            <SpinnerContainer isLoading={isLoading}>
                {paperElements}
                {pagination}
                <SelectCategoryModal
                    categories={categories}
                    onSelectCategoryClicked={onSelectCategoryClicked}
                    isModalOpen={isModalOpen}
                    setModalOpen={setModalOpen}/>
            </SpinnerContainer>
        </div>
    )
}

export default SearchPaperListContainer;
