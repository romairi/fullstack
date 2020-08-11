import {
    ADD_PAPER_ACTION_TYPE,
    CREATE_CATEGORY_ACTION_TYPE, REMOVE_CATEGORY_ACTION_TYPE,
    REMOVE_PAPER_ACTION_TYPE,
    SET_USER_ACTION_TYPE
} from "./constants";
import Immutable from "seamless-immutable";

export default function userReducer(state = Immutable({}), action) {
    let newState;
    switch (action.type) {
        case SET_USER_ACTION_TYPE:
            newState = Immutable({...action.payload});
            break;

        case CREATE_CATEGORY_ACTION_TYPE:
            newState = Immutable({...state, categories: [...state.categories, action.payload.category]});
            break;

        case ADD_PAPER_ACTION_TYPE: {
            const category = state.categories.find(c => c._id === action.payload.categoryId).asMutable();

            category.paperItems = [...category.paperItems, action.payload.paper];
            const newCategories = [...state.categories.filter(c => c._id !== action.payload.categoryId), category]; // TODO place the category in the expected index
            newState = Immutable({...state, categories: newCategories});

            break;
        }

        case REMOVE_PAPER_ACTION_TYPE: {
            const {categoryId, paperId} = action.payload;
            const resCategories = state.categories.filter(c => c._id !== categoryId);
            const category = state.categories.find(c => c._id === categoryId).asMutable();
            category.paperItems = category.paperItems.filter(item => item.paperId !== paperId);
            newState = Immutable({...state, categories: [...resCategories, category]});

            break;
        }

        case REMOVE_CATEGORY_ACTION_TYPE: {
            newState = Immutable({
                ...state,
                categories: state.categories.filter(c => action.payload.categoryId !== c._id)
            });
            break;
        }

        default:
            newState = state;
    }
    return newState;
}
