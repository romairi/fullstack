import axios from 'axios';
import _ from 'lodash';
import {API_ACTION_TYPE, API_METHOD_GET} from "./constants";

const apiMiddleware = store => next => action => {
    if (action.type === API_ACTION_TYPE) {
        const {method = API_METHOD_GET, url, data, params, onSuccess = _.noop, onError = _.noop} = action.payload;
        axios({
            method,
            url,
            data,
            params,
        })
            .then(onSuccess)
            .catch(onError);
    } else {
        next(action);
    }
};

export default apiMiddleware;