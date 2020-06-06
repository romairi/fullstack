import {SET_PAPERS_ACTION_TYPE} from "./constants";

export function setPapersAction(papers) {
    return {
        type: SET_PAPERS_ACTION_TYPE,
        payload: papers,
    }
}
