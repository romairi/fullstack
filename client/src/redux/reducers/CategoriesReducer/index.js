import {ADD_PAPER_ACTION_TYPE, REMOVE_PAPER_ACTION_TYPE, SET_CATEGORIES_ACTION_TYPE} from "./constants";

export default function categoriesReducer(state = [], action) {
    let newState;
    let category;
    switch (action.type) {
        case SET_CATEGORIES_ACTION_TYPE:
            newState = [...action.payload];
            break;
        case ADD_PAPER_ACTION_TYPE:
            const {categoryId, paper} = action.payload;
            category = state.find(c => c._id === categoryId);
            category.paperItems = [...category.paperItems, paper];
            newState = [...state.filter(c => c._id !== categoryId), category];
            break;
        case REMOVE_PAPER_ACTION_TYPE:
            category = state.find(c => c._id === action.payload.categoryId);
            newState = category.filter(paper => paper.paperId !== action.payload);
            break;
        default:
            newState = state;
    }
    return newState;
}
