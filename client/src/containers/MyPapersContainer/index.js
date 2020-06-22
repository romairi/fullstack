import React from 'react';
import './index.scss';
import {useDispatch, useSelector} from "react-redux";
import {
    extractPaperAction,
    getPapersAction,
    removePaperAction,
    setPapersAction
} from "../../redux/reducers/MyPapersReducer/actions";
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


    const onRemovePapersSuccess = (response) => {
        debugger
        dispatch(extractPaperAction(response.data));
    };

    const onRemoveButtonClicked = (itemId) => {
        dispatch(removePaperAction({
            data: {paperId: itemId},
            onSuccess: onRemovePapersSuccess,
            onError: onRemovePapersFailed
        }));

    };

    const onRemovePapersFailed = (err) => {
        console.log(err);
    };

    const paperElements = papers.map(paper => {
        const publishedDate = new Date(paper.published).toDateString();
        const updatedDate = new Date(paper.updated).toDateString();
        const paperExist = papers.find(p => p.paperId === paper.paperId);

        return <PaperItem
            id={paper.paperId}
            key={paper.paperId}
            title={paper.title}
            summary={paper.summary}
            authors={paper.authors}
            publishedDate={publishedDate}
            updatedDate={updatedDate}
            pdfLink={paper.pdfLink}
            onRemoveButtonClicked={onRemoveButtonClicked}
            paperExist={!!paperExist}
        />
    });

    return (
        <div className="my_papers_container">
            {paperElements}
        </div>
    )
}


export default MyPapersContainer;
