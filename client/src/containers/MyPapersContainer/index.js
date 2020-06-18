import React from 'react';
import './index.scss';
import {useDispatch, useSelector} from "react-redux";
import {getPapersAction, setPapersAction} from "../../redux/reducers/MyPapersReducer/actions";
import {LINK_TYPE} from "../SearchPaperListContainer/constants";
import PaperItem from "../../components/PaperItem";



function MyPapersContainer(props) {
    const papers = useSelector(state => state.papers);
    const dispatch = useDispatch();

    const onGetPapersSuccess = (response) => {
        console.log(response.data);
        dispatch(setPapersAction(response.data));
    };

    React.useEffect(() => {
        dispatch(getPapersAction({onSuccess: onGetPapersSuccess, onError: err => console.log(err)}));
    }, []);


    const onRemoveButtonClicked = (idItem, typeBtn) => {
        console.log(idItem);
    };

    const paperElements = papers.map(paper => {
        const publishedDate =  new Date(paper.published).toDateString();
        const updatedDate =  new Date(paper.updated).toDateString();

        return <PaperItem
            key={paper.paperId}
            title={paper.title}
            summary={paper.summary}
            authors={paper.authors}
            publishedDate={publishedDate}
            updatedDate={updatedDate}
            pdfLink={paper.pdfLink}
            onRemoveButtonClicked={onRemoveButtonClicked}
            paperExist
        />
    });

    return (
        <div className="my_papers_container">
            {paperElements}
        </div>
    )
}


export default MyPapersContainer;
