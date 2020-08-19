import _ from "lodash";
import {API_ACTION_TYPE, API_METHOD_POST} from "../../middleware/ApiMiddleware/constants";
import {REMOVE_SEARCH_PATH} from "../../../constants";

export function removeSearchDataAction({data, onSuccess = _.noop, onError = _.noop}) {
    return {
        type: API_ACTION_TYPE,
        payload: {
            method: API_METHOD_POST,
            url: REMOVE_SEARCH_PATH,
            data,
            onSuccess,
            onError
        }
    };
}
