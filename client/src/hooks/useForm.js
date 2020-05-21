import React from 'react';
import _ from 'lodash';
import {reformatErrors, validateValues} from '../services/validateValuesService';
import {GENERAL_ERROR_FIELD, VALIDATION_ERROR} from "./constants";


const useForm = (schema = _.noop, callback = _.noop) => {
    const [values, setValues] = React.useState({});
    const [errors, setErrors] = React.useState({});
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const handleServerError = React.useCallback(err => {
        const errorData = err.response.data;
        if (_.isString(errorData)) {
            setErrors({[GENERAL_ERROR_FIELD]: 'we have a temp error, please try again later'}); // TODO fix the message
            return;
        }
        switch (errorData.name) {
            case VALIDATION_ERROR:
                setErrors(reformatErrors(errorData.details.body));
                break;
            default:
                setErrors({[GENERAL_ERROR_FIELD]: errorData.message});
        }
    }, [setErrors]);

    const handleChange = React.useCallback(event => {
        const {id, value} = event.target;
        const newValues = {...values, [id]: value};
        setValues(newValues);

        if (isSubmitting) {
            setErrors(validateValues(newValues, schema));
        }
    }, [values, isSubmitting, schema]);

    const handleSubmit = React.useCallback(event => {
        event.preventDefault();
        const newErrors = validateValues(values, schema);
        setErrors(newErrors);
        setIsSubmitting(true);

        if (_.isEmpty(newErrors)) {
            callback(values, handleServerError);
        }
    }, [values, schema, callback]);


    return {
        values,
        errors,
        isSubmitting,
        handleChange,
        handleSubmit,
    };
};

export default useForm;