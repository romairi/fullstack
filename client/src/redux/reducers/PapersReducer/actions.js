import _ from 'lodash';
import {SET_PAPERS_ACTION_TYPE} from "./constants";
import {API_ACTION_TYPE} from "../../middleware/ApiMiddleware/constants";
import {GET_PAPERS_PATH} from "../../../constants";

export function setPapersAction(papers) {
    return {
        type: SET_PAPERS_ACTION_TYPE,
        payload: papers,
    }
}

export function getPapersAction({onSuccess = _.noop, onError = _.noop}) {
    return {
        type: API_ACTION_TYPE,
        payload: {
            url: GET_PAPERS_PATH,
            onSuccess,
            onError
        }
    };
}