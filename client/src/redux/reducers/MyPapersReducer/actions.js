import _ from 'lodash';
import {ADD_PAPER_ACTION_TYPE, EXTRACT_PAPER_ACTION_TYPE, SET_PAPERS_ACTION_TYPE} from "./constants";
import {API_ACTION_TYPE, API_METHOD_POST} from "../../middleware/ApiMiddleware/constants";
import {GET_PAPERS_PATH, REMOVE_PAPER_PATH} from "../../../constants";

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

export function addPaperAction(paper) {
    return {
        type: ADD_PAPER_ACTION_TYPE,
        payload: paper,
    }
}

export function extractPaperAction(paperId) {
    return {
        type: EXTRACT_PAPER_ACTION_TYPE,
        payload: paperId,
    }
}

export function removePaperAction({data, onSuccess = _.noop, onError = _.noop}) {
    return {
        type: API_ACTION_TYPE,
        payload: {
            method: API_METHOD_POST,
            url: REMOVE_PAPER_PATH,
            data,
            onSuccess,
            onError
        }
    };
}
