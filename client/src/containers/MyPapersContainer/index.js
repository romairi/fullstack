import React from 'react';
import './index.scss';
import {useDispatch, useSelector} from "react-redux";
import {
    extractPaperAction,
    removePaperAction,
} from "../../redux/reducers/MyPapersReducer/actions";
import PaperItem from "../../components/PaperItem";
import CategoryPaperBox from "../../components/CategoryPaperBox";


function MyPapersContainer(props) {
    const papers = useSelector(state => state.papers);
    const dispatch = useDispatch();

    const [allPapers, setAllPapers] = React.useState(papers);
    const [searchParam, setSearchParam] = React.useState('');

    React.useEffect(() => {
        setAllPapers(papers);
        setSearchParam('');
    }, [papers]);

    const onSearchChange = (event) => {
        // const filterPapers = papers.filter(item => {
        //     return item.title.toLowerCase().includes(event.target.value.toLowerCase()); //TODO support more fields + extract to a service
        // });
        const filterPapers = papers.filter(item => [item.title, item.summary]
            .map(text => text.toLowerCase())
            .filter(text => text.includes(event.target.value.toLowerCase()))
            .length > 0
        );

        setAllPapers(filterPapers);
        setSearchParam(event.target.value);
    };

    const onRemovePapersSuccess = (response) => {
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

    const paperElements = allPapers.map(paper => {
        const publishedDate = new Date(paper.published).toDateString();
        const updatedDate = new Date(paper.updated).toDateString();
        const paperExist = allPapers.find(p => p.paperId === paper.paperId);

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
            <CategoryPaperBox onSearchChange={onSearchChange} searchParam={searchParam} />
            {paperElements}
        </div>
    )
}

export default MyPapersContainer;
