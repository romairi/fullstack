import _ from 'lodash';
import {API_ACTION_TYPE, API_METHOD_POST} from "../../redux/middleware/ApiMiddleware/constants";
import {SIGNUP_PATH} from "../../constants";

export function signupAction({data, onSuccess = _.noop, onError = _.noop}) {
    return {
        type: API_ACTION_TYPE,
        payload: {
            method: API_METHOD_POST,
            url: SIGNUP_PATH,
            data,
            onSuccess,
            onError
        }
    };
}