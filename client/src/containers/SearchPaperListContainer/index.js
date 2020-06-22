import React from 'react';
import _ from 'lodash';
import {useDispatch, useSelector} from "react-redux";
import PaperItem from "../../components/PaperItem";
import './index.scss';
import SearchBox from "../../components/SearchBox";
import SpinnerContainer from "../../components/Spinner";
import {
    savePaperAction,
    searchPapersAction,
    setSearchPapersAction
} from "../../redux/reducers/SearchPapersReducer/actions";
import {
    addPaperAction, extractPaperAction,
    getPapersAction,
    removePaperAction,
    setPapersAction
} from "../../redux/reducers/MyPapersReducer/actions";

function SearchPaperListContainer(props) {
    const myPapers = useSelector(state => state.papers);
    const papers = useSelector(state => state.searchPapers);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = React.useState(false);

    const onGetPapersSuccess = (response) => {
        console.log(response.data);
        dispatch(setPapersAction(response.data));
    };

    React.useEffect(() => {
        dispatch(getPapersAction({onSuccess: onGetPapersSuccess, onError: err => console.log(err)}));
    }, []);

    const onSearchPapersSuccess = (response) => {
        setIsLoading(false);
        console.log(response.data);
        dispatch(setSearchPapersAction(response.data));
    };

    const onSearchPapersFailed = (err) => {
        setIsLoading(false);
        console.log(err);
    };

    const onSearchButtonClicked = (searchIncTags, searchExcTags) => {
        if (!_.isEmpty(searchIncTags) || !_.isEmpty(searchExcTags)) {
            setIsLoading(true);
            dispatch(searchPapersAction({
                data: {includeList: searchIncTags, excludeList: searchExcTags},
                onSuccess: onSearchPapersSuccess,
                onError: onSearchPapersFailed
            }));
        }
    };

    const onSavePapersSuccess = response => {
        setIsLoading(false);
        dispatch(addPaperAction(response.data));
    };

    const onSavePapersFailed = (err) => {
        setIsLoading(false);
        console.log(err);
    };

    const onSaveButtonClicked = (itemId) => {
        const item = papers.find(paper => paper.paperId === itemId);
        if (item) {
            dispatch(savePaperAction({
                data: {paper: item},
                onSuccess: onSavePapersSuccess,
                onError: onSavePapersFailed
            }));
        }
    };

    const onRemovePapersSuccess = response => {
        setIsLoading(false);
        dispatch(extractPaperAction(response.data));
    };

    const onRemovePapersFailed = (err) => {
        setIsLoading(false);
        console.log(err);
    };

    const onRemoveButtonClicked = (itemId) => {
        dispatch(removePaperAction({
            data: {paperId: itemId},
            onSuccess: onRemovePapersSuccess,
            onError: onRemovePapersFailed
        }));
    };


    const paperElements = papers.map(paper => {
        const publishedDate = new Date(paper.published).toDateString();
        const updatedDate = new Date(paper.updated).toDateString();
        const paperExist = myPapers.find(p => p.paperId === paper.paperId);

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

    return (
        <div className="papers_container">
            <SearchBox onSearchButtonClicked={onSearchButtonClicked}/>
            <SpinnerContainer isLoading={isLoading}>
                {paperElements}
            </SpinnerContainer>
        </div>
    )
}

export default SearchPaperListContainer;
