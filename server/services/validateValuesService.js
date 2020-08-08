function validateValues(values, schema) {
    const results = schema.validate(values, {abortEarly: false});
    let errors = {};

    if (results.error) {
        // errors = Array.isArray(results.error.details) ? results.error.details.reduce((acc, cur) => {
        //     acc[cur.context.key] = cur.message;
        //     return acc;
        // }, {}) : {};

        Array.isArray(results.error.details) ? results.error.details
            .filter(item => !!item?.context?.key && !!item.message)
            .reduce((acc, cur) => {
                acc[cur.context.key] = cur.message;
                return acc;
            }, {}) : {};
    }
    return errors;
}

module.exports = validateValues;
