import {ADD_PAPER_ACTION_TYPE, SET_SEARCH_PAPERS_ACTION_TYPE} from "./constants";

export default function searchPapersReducer(state = [], action) {
    let newState;
    switch (action.type) {
        case SET_SEARCH_PAPERS_ACTION_TYPE:
            newState = [...action.payload];
            break;
        case ADD_PAPER_ACTION_TYPE:
            debugger
            // newState = [action.payload, ...state]; // I get 11 elements in array,
            // newState = [...action.payload]; // TypeError: action.payload is not iterable
            newState = [action.payload];
        default:
            newState = state;
    }
    return newState;
}
