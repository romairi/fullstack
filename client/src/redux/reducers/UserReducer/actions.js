import {
    ADD_PAPER_ACTION_TYPE,
    CREATE_CATEGORY_ACTION_TYPE,
    REMOVE_PAPER_ACTION_TYPE,
    SET_USER_ACTION_TYPE,
    REMOVE_CATEGORY_ACTION_TYPE,
    ADD_SEARCH_ACTION_TYPE,
    REMOVE_SEARCH_ACTION_TYPE
} from "./constants";

export function createSetUserAction(user) {
    return {
        type: SET_USER_ACTION_TYPE,
        payload: user,
    }
}

export function createCategoryAction(category) {
    return {
        type: CREATE_CATEGORY_ACTION_TYPE,
        payload: {
            category
        }
    }
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

export function addSearchAction(search) {
    return {
        type: ADD_SEARCH_ACTION_TYPE,
        payload: {
            search
        }
    }
}

export function removeSearchAction(searchId) {
    return {
        type: REMOVE_SEARCH_ACTION_TYPE,
        payload: {
            searchId
        }
    }
}
