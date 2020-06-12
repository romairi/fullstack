import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPapersAction} from "./actions";
import {setPapersAction} from "../../redux/reducers/PapersReducer/actions";
import PaperItem from "../../components/PaperItem";
import {LINK_TYPE} from "./constants";
import './index.scss';
import SearchBox from "../../components/SearchBox";
import Spinner from "../../components/Spinner";

function PaperListContainer(props) {
    const papers = useSelector(state => state.papers);
    const dispatch = useDispatch();

    const onGetPapersSuccess = (response) => {
        console.log(response.data);
        dispatch(setPapersAction(response.data));
    };

    React.useEffect(() => {
        //TODO remove timeout - need to add loading indication
        setTimeout(() => dispatch(getPapersAction({onSuccess: onGetPapersSuccess, onError: err => console.log(err)})), 1500);
        // dispatch(getPapersAction({onSuccess: onGetPapersSuccess, onError: err => console.log(err)}));
    }, []);

    const paperElements = papers.map(paper => {
        const pdfLinkObject = paper.links.find(link => link.title === LINK_TYPE);
        const pdfLink = pdfLinkObject ? pdfLinkObject.href : null;

        const publishedDate =  new Date(paper.published).toDateString();
        const updatedDate =  new Date(paper.updated).toDateString();



        return <PaperItem
            id={paper.id}
            key={paper.id}
            title={paper.title}
            summary={paper.summary}
            authors={paper.authors}
            publishedDate={publishedDate}
            updatedDate={updatedDate}
            pdfLink={pdfLink}
        />
    });

    return (
        <div className="papers_container">
           <SearchBox/>
            {paperElements}
            <Spinner/>
        </div>
    )
}

export default PaperListContainer;
