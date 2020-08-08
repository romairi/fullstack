import _ from 'lodash';
import {API_ACTION_TYPE, API_METHOD_POST} from "../../middleware/ApiMiddleware/constants";
import {ADD_CATEGORY_PATH, REMOVE_PAPER_PATH, REMOVE_CATEGORY_PATH} from "../../../constants";


export function addCategoryAction({categoryName, onSuccess = _.noop, onError = _.noop}) {
    return {
        type: API_ACTION_TYPE,
        payload: {
            method: API_METHOD_POST,
            url: ADD_CATEGORY_PATH,
            data: {
                categoryName,
            },
            onSuccess,
            onError
        }
    };
}

export function removeCategoryAction({data, onSuccess = _.noop, onError = _.noop}) {
    return {
        type: API_ACTION_TYPE,
        payload: {
            method: API_METHOD_POST,
            url: REMOVE_CATEGORY_PATH,
            data,
            onSuccess,
            onError
        }
    };
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
