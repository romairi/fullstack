import _ from 'lodash';
import {API_ACTION_TYPE, API_METHOD_POST} from "../../middleware/ApiMiddleware/constants";
import {SEARCH_PAPERS_PATH} from "../../../constants";
import {SET_SEARCH_PAPERS_ACTION_TYPE} from "./constants";

export function setSearchPapersAction(papers) {
    return {
        type: SET_SEARCH_PAPERS_ACTION_TYPE,
        payload: papers,
    }
}

export function searchPapersAction({data, onSuccess = _.noop, onError = _.noop}) {
    return {
        type: API_ACTION_TYPE,
        payload: {
            method: API_METHOD_POST,
            url: SEARCH_PAPERS_PATH,
            data,
            onSuccess,
            onError
        }
    };
}