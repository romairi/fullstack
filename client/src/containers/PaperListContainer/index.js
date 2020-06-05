import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPapersAction} from "./actions";
import {setPapersAction} from "../../redux/reducers/PapersReducer/actions";
import PaperItem from "../../components/PaperItem";


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
        const pdfLinkObject = paper.links.find(link => link.title === 'pdf');
        const pdfLink = pdfLinkObject ? pdfLinkObject.href : null;
        return <PaperItem
            key={paper.id}
            title={paper.title}
            summary={paper.summary}
            authors={paper.authors}
            publishedDate={paper.published}
            updatedDate={paper.updated}
            pdfLink={pdfLink}
        />
    });

    return (
        <div className="papers_container">
            <div>
                PAPERS SEARCH BOX
            </div>

            {paperElements}
        </div>
    )
}

export default PaperListContainer;
