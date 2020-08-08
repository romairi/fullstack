export function reformatErrors(details) {
    return Array.isArray(details) ? details
        .filter(item => !!item?.context?.key && !!item.message)
        .reduce((acc, cur) => {
            acc[cur.context.key] = cur.message;
            return acc;
        }, {}) : {};
}

export function validateValues(values, schema) {
    const results = schema.validate(values, {abortEarly: false});
    let errors = {};

    if (results.error) {
        errors = reformatErrors(results.error.details);
    }
    return errors;
}
