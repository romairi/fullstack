import {ADD_PAPER_ACTION_TYPE, EXTRACT_PAPER_ACTION_TYPE, SET_CATEGORIES_ACTION_TYPE} from "./constants";

export default function categoriesReducer(state = [], action) {
    let newState;
    switch (action.type) {
        case SET_CATEGORIES_ACTION_TYPE:
            newState = [...action.payload];
            break;
        case ADD_PAPER_ACTION_TYPE:
            const {categoryId, paper} = action.payload;
            const category = state.find(c => c._id === categoryId);
            category.paperItems = [...category.paperItems, paper];
            newState = [...state.filter(c => c._id !== categoryId), category];
            break;
        case EXTRACT_PAPER_ACTION_TYPE:
            newState = state.filter(paper => paper.paperId !== action.payload); // TODO implement with category
            break;
        default:
            newState = state;
    }
    return newState;
}
