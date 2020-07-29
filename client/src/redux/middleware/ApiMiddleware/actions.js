import {API_ACTION_TYPE, API_METHOD_GET} from "./constants";
import _ from 'lodash';
//TODO
export function createApiRequestAction({method = API_METHOD_GET, url, data, params, onSuccess = _.noop, onError = _.noop}) {
    return {
        type: API_ACTION_TYPE,
        payload: {
            method,
            url,
            data,
            params,
            onSuccess,
            onError
        }
    };
}
