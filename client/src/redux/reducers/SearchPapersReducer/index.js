import {SET_SEARCH_PAPERS_ACTION_TYPE} from "./constants";

export default function searchPapersReducer(state = [], action) {
    let newState;
    switch (action.type) {
        case SET_SEARCH_PAPERS_ACTION_TYPE:
            newState = [...action.payload];
            break;
        default:
            newState = state;
    }
    return newState;
}
