export function reformatErrors(details) {
    return details.reduce((acc, cur) => {
        acc[cur.context.key] = cur.message;
        return acc;
    }, {});
}

export function validateValues(values, schema) {
    const results = schema.validate(values, {abortEarly: false});
    let errors = {};

    if (results.error) {
        errors = reformatErrors(results.error.details);
    }
    return errors;
}

