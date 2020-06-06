import _ from 'lodash';
import {API_ACTION_TYPE} from "../../redux/middleware/ApiMiddleware/constants";
import {GET_PAPERS_PATH} from "../../constants";

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
