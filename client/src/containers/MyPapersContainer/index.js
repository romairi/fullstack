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
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories);
    const [selectedCategoryId, setSelectedCategoryId] = React.useState(undefined);
    const [searchParam, setSearchParam] = React.useState('');
    const [isCreateCategoryModalOpen, setCreateCategoryModalOpen] = React.useState(false);
    const [allPapers, setAllPapers] = React.useState([]);
    const [selectedPapers, setSelectedPapers] = React.useState([]);


    React.useEffect(() => {
        if (categories.length > 0) {
            if (!selectedCategoryId) {
                setSelectedCategoryId(categories[0]._id);
            } else {
                const selectedCategory = categories.find(c => c._id === selectedCategoryId);
                const papers = selectedCategory.paperItems;
                setAllPapers(papers);
                setSelectedPapers(papers);
                setSearchParam('');
            }
        }
    }, [categories, selectedCategoryId]);

    const onSearchChange = (event) => {
        const filterPapers = searchByFields(allPapers, event.target.value); //TODO support more fields
        setSelectedPapers(filterPapers);
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
            categoryName,
            onSuccess: response => {
                setCreateCategoryModalOpen(false);
            },
            onError: (err) => {
                console.log(err);
            }
        }));
    };

    const paperElements = selectedPapers.map(paper => {
        const publishedDate = new Date(paper.published).toDateString();
        const updatedDate = new Date(paper.updated).toDateString();
        const paperExist = selectedPapers.find(p => p.paperId === paper.paperId);

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
            <CategoryPaperBox
                categories={categories}
                selectedCategoryId={selectedCategoryId}
                setSelectedCategoryId={setSelectedCategoryId}
                onSearchChange={onSearchChange}
                searchParam={searchParam}
                onAddCategoryClicked={onAddCategoryClicked}
                isCreateCategoryModalOpen={isCreateCategoryModalOpen}
                setCreateCategoryModalOpen={setCreateCategoryModalOpen}
            />
            {paperElements}
        </div>
    )
}

export default MyPapersContainer;
