import {SET_USER_ACTION_TYPE} from "./constants";

export function createSetUserAction(user) {
    return {
        type: SET_USER_ACTION_TYPE,
        payload: user,
    }
}