import _ from 'lodash';
import {API_METHOD_POST} from "../../redux/middleware/ApiMiddleware/constants";
import {SIGNUP_PATH} from "../../constants";
import {createApiRequestAction} from "../../redux/middleware/ApiMiddleware/actions";

export function signupAction({data, onSuccess = _.noop, onError = _.noop}) {
    return createApiRequestAction({
        method: API_METHOD_POST,
        url: SIGNUP_PATH,
        data,
        onSuccess,
        onError
    });
}
