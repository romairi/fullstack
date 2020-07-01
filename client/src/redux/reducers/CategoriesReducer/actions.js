import _ from 'lodash';
import {ADD_PAPER_ACTION_TYPE, EXTRACT_PAPER_ACTION_TYPE, SET_CATEGORIES_ACTION_TYPE} from "./constants";
import {API_ACTION_TYPE, API_METHOD_POST} from "../../middleware/ApiMiddleware/constants";
import {ADD_CATEGORY_PATH, GET_CATEGORIES_PATH, REMOVE_PAPER_PATH} from "../../../constants";

export function setCategoriesAction(categories) {
    return {
        type: SET_CATEGORIES_ACTION_TYPE,
        payload: categories,
    }
}

export function getCategoriesAction({onSuccess = _.noop, onError = _.noop}) {
    return {
        type: API_ACTION_TYPE,
        payload: {
            url: GET_CATEGORIES_PATH,
            onSuccess,
            onError
        }
    };
}

export function addCategoryAction({categoryName, onSuccess = _.noop, onError = _.noop}) {
    debugger
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

export function addPaperAction(categoryId, paper) {
    debugger
    return {
        type: ADD_PAPER_ACTION_TYPE,
        payload: {
            categoryId,
            paper
        },
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
