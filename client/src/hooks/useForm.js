import React from 'react';
import _ from 'lodash';
import validateValues from '../services/validateValuesService';

const useForm = (schema = _.noop, callback = _.noop) => {
    const [values, setValues] = React.useState({});
    const [errors, setErrors] = React.useState({});
    const [isSubmitting, setIsSubmitting] = React.useState(false);

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
            callback(values);
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