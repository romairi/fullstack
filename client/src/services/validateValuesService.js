export default function validateValues(values, schema) {
    const results = schema.validate(values, {abortEarly: false});
    let errors = {};

    if (results.error) {
        errors = results.error.details.reduce((acc, cur) => {
            acc[cur.context.key] = cur.message;
            return acc;
        }, {});
    }
    return errors;
};

