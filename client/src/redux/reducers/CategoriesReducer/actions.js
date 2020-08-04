import _ from 'lodash';
import {
    ADD_PAPER_ACTION_TYPE,
    CREATE_CATEGORY_ACTION_TYPE,
    REMOVE_PAPER_ACTION_TYPE,
    SET_CATEGORIES_ACTION_TYPE,
    REMOVE_CATEGORY_ACTION_TYPE
} from "./constants";
import {API_ACTION_TYPE, API_METHOD_POST} from "../../middleware/ApiMiddleware/constants";
import {ADD_CATEGORY_PATH, GET_CATEGORIES_PATH, REMOVE_PAPER_PATH, REMOVE_CATEGORY_PATH} from "../../../constants";

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

export function createCategoryAction(category) {
    return {
        type: CREATE_CATEGORY_ACTION_TYPE,
        payload: {
            category
        }
    }
}

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


export function addPaperAction(categoryId, paper) {
    return {
        type: ADD_PAPER_ACTION_TYPE,
        payload: {
            categoryId,
            paper
        },
    }
}

export function deletePaperAction(categoryId, paperId) {
    return {
        type: REMOVE_PAPER_ACTION_TYPE,
        payload: {
            categoryId,
            paperId
        }
    }
}

export function deleteCategoryAction(categoryId) {
    return {
        type: REMOVE_CATEGORY_ACTION_TYPE,
        payload: {
            categoryId,
        }
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
