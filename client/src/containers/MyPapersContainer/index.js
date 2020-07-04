import React from 'react';
import './index.scss';
import {useDispatch, useSelector} from "react-redux";
import {
    addCategoryAction,
    deletePaperAction,
    removePaperAction,
} from "../../redux/reducers/CategoriesReducer/actions";
import PaperItem from "../../components/PaperItem";
import CategoryPaperBox from "../../components/CategoryPaperBox";
import {searchByFields} from "../../services/itemUtilitiesService";


function MyPapersContainer(props) {
    const categories = useSelector(state => state.categories);
    const papers = categories.length > 0 ? categories[0].paperItems : [];
    const dispatch = useDispatch();

    const [allPapers, setAllPapers] = React.useState(papers);
    const [searchParam, setSearchParam] = React.useState('');

    React.useEffect(() => {
        setAllPapers(papers);
        setSearchParam('');
    }, [categories]);


    React.useEffect(() => {

    });

    const onSearchChange = (event) => {
        const filterPapers = searchByFields(papers, event.target.value); //TODO support more fields
        setAllPapers(filterPapers);
        setSearchParam(event.target.value);
    };

    const onRemovePapersSuccess = (categoryId, response) => {
        dispatch(deletePaperAction(categoryId, response.data));
    };

    const onRemoveButtonClicked = (itemId) => {
        const categoryId = categories.length > 0 ? categories[0]._id : 'default';//TODO get category id from a modal
        dispatch(removePaperAction({
            data: {paperId: itemId, categoryId},
            onSuccess: response => onRemovePapersSuccess(categoryId, response),
            onError: onRemovePapersFailed
        }));

    };

    const onRemovePapersFailed = (err) => {
        console.log(err);
    };

    const onAddCategoryClicked = (categoryName) => {
        dispatch(addCategoryAction({
            data: {category: categoryName},
            onSuccess: response => {
                debugger
            },
            onError: () => {
            }
        }));
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
            <CategoryPaperBox onSearchChange={onSearchChange} searchParam={searchParam}
                              onAddCategoryClicked={onAddCategoryClicked}/>
            {paperElements}
        </div>
    )
}

export default MyPapersContainer;
