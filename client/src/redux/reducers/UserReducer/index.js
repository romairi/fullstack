import {SET_USER_ACTION_TYPE} from "./constants";

export default function userReducer(state = {}, action) {
    let newState;
    switch (action.type) {
        case SET_USER_ACTION_TYPE:
            newState = {...action.payload};
            break;
        default:
            newState = state;
    }
    return newState;
}