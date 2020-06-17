import {ADD_PAPER_ACTION_TYPE, SET_PAPERS_ACTION_TYPE} from "./constants";

export default function myPapersReducer(state = [], action) {
    let newState;
    switch (action.type) {
        case SET_PAPERS_ACTION_TYPE:
            newState = [...action.payload];
            break;
        case ADD_PAPER_ACTION_TYPE:
            newState = [...state, action.payload];
        default:
            newState = state;
    }
    return newState;
}
