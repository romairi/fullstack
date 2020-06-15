import {SET_PAPERS_ACTION_TYPE} from "./constants";

export default function myPapersReducer(state = [], action) {
    let newState;
    switch (action.type) {
        case SET_PAPERS_ACTION_TYPE:
            newState = [...action.payload];
            break;
        default:
            newState = state;
    }
    return newState;
}
