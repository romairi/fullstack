import React from 'react';
import _ from 'lodash';
import {useDispatch, useSelector} from "react-redux";
import PaperItem from "../../components/PaperItem";
import {LINK_TYPE} from "./constants";
import './index.scss';
import SearchBox from "../../components/SearchBox";
import SpinnerContainer from "../../components/Spinner";
import {
    savePaperAction,
    searchPapersAction,
    setSearchPapersAction
} from "../../redux/reducers/SearchPapersReducer/actions";

function PaperListContainer(props) {
    const papers = useSelector(state => state.searchPapers);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = React.useState(false);

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

    const onSaveButtonClicked = (itemId) => {
        const item = papers.find(paper => paper.id === itemId);
        if (item) {
            dispatch(savePaperAction({
                data: {paper: item},
                // onSuccess: onSearchPapersSuccess, //TODO implement
                // onError: onSearchPapersFailed
            }));
        }
    };


    const paperElements = papers.map(paper => {
        const pdfLinkObject = paper.links.find(link => link.title === LINK_TYPE);
        const pdfLink = pdfLinkObject ? pdfLinkObject.href : null;

        const publishedDate = new Date(paper.published).toDateString();
        const updatedDate = new Date(paper.updated).toDateString();


        return <PaperItem
            id={paper.id}
            key={paper.id}
            title={paper.title}
            summary={paper.summary}
            authors={paper.authors}
            publishedDate={publishedDate}
            updatedDate={updatedDate}
            pdfLink={pdfLink}
            onSaveButtonClicked={onSaveButtonClicked}
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

export default PaperListContainer;
