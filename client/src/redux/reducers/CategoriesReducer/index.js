import {
    ADD_PAPER_ACTION_TYPE,
    CREATE_CATEGORY_ACTION_TYPE,
    REMOVE_PAPER_ACTION_TYPE,
    SET_CATEGORIES_ACTION_TYPE,
    REMOVE_CATEGORY_ACTION_TYPE
} from "./constants";
import Immutable from 'seamless-immutable';


export default function categoriesReducer(state = Immutable([]), action) {
    let newState;
    let category;
    switch (action.type) {
        case SET_CATEGORIES_ACTION_TYPE:
            newState =Immutable(action.payload);
            break;

        case ADD_PAPER_ACTION_TYPE: {
            const {categoryId, paper} = action.payload;
            category = state.find(c => c._id === categoryId).asMutable();
            category.paperItems = [...category.paperItems, paper];
            newState = Immutable([...state.filter(c => c._id !== categoryId), category]);
            break;
        }

        case REMOVE_PAPER_ACTION_TYPE: {
            const {categoryId, paperId} = action.payload;
            const resCategories = state.filter(c => c._id !== categoryId);
            category = state.find(c => c._id === categoryId).asMutable();
            category.paperItems = category.paperItems.filter(item => item.paperId !== paperId);
            newState = resCategories.concat([category]);

            break;
        }

        case CREATE_CATEGORY_ACTION_TYPE: {
            newState = [...state, action.payload.category];
            break;
        }

        case REMOVE_CATEGORY_ACTION_TYPE: {
            debugger
            newState = state.filter(c => action.payload.categoryId !== c._id);
            break;
        }

        default:
            newState = state;
    }
    return newState;
}
