import _ from "lodash";
import {API_ACTION_TYPE} from "../../redux/middleware/ApiMiddleware/constants";
import {LOGOUT_PATH} from "../../constants";

export function logoutAction({onSuccess = _.noop, onError = _.noop}) {
    return {
        type: API_ACTION_TYPE,
        payload: {
            url: LOGOUT_PATH,
            onSuccess,
            onError
        }
    };
}