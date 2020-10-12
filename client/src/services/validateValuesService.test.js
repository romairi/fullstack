import {reformatErrors, validateValues} from "./validateValuesService";

describe('validateValuesService', () => {
    describe('validateValues', () => {
        const values = {value: 'roman2'};
        let schema;

        beforeEach(() => {
            schema = {
                validate: jest.fn(),
            };
        });

        it('should return results without errors', () => {
            schema.validate.mockReturnValueOnce({value: 'roman'});

            const results = validateValues(values, schema);

            expect(schema.validate).toHaveBeenCalledWith(values, {abortEarly: false});
            expect(results).toEqual({});
        });
        it('should return results with errors but without details', () => {
            schema.validate.mockReturnValueOnce({error: {}});

            const results = validateValues(values, schema);

            expect(schema.validate).toHaveBeenCalledWith(values, {abortEarly: false});
            expect(results).toMatchSnapshot();
        });
        it('should return results with errors but details is not array', () => {
            schema.validate.mockReturnValueOnce({error: {details: 'sdfsdfdsf'}});

            const results = validateValues(values, schema);

            expect(schema.validate).toHaveBeenCalledWith(values, {abortEarly: false});
            expect(results).toMatchSnapshot();
        });
        it('should return results with errors but details is empty array', () => {
            schema.validate.mockReturnValueOnce({error: {details: []}});

            const results = validateValues(values, schema);

            expect(schema.validate).toHaveBeenCalledWith(values, {abortEarly: false});
            expect(results).toMatchSnapshot();
        });
        it('should return empty object - details as no context', () => {
            schema.validate.mockReturnValueOnce({error: {details: [{message: 'sdf'}]}});

            const results = validateValues(values, schema);

            expect(schema.validate).toHaveBeenCalledWith(values, {abortEarly: false});
            expect(results).toMatchSnapshot();
        });
        it('should return empty object - details as context but without key', () => {
            schema.validate.mockReturnValueOnce({error: {details: [{message: 'sdf', context: {}}]}});

            const results = validateValues(values, schema);

            expect(schema.validate).toHaveBeenCalledWith(values, {abortEarly: false});
            expect(results).toMatchSnapshot();
        });
        it('should return empty object - details as no message', () => {
            schema.validate.mockReturnValueOnce({error: {details: [{context: {key: 'key'}}]}});

            const results = validateValues(values, schema);

            expect(schema.validate).toHaveBeenCalledWith(values, {abortEarly: false});
            expect(results).toMatchSnapshot();
        });
        it('should return the formatted error', () => {
            schema.validate.mockReturnValueOnce({error: {details: [{context: {key: 'key'}, message: 'message'}]}});

            const results = validateValues(values, schema);

            expect(schema.validate).toHaveBeenCalledWith(values, {abortEarly: false});
            expect(results).toMatchSnapshot();
        });
        it('should return the formatted error only for the valid detail', () => {
            schema.validate.mockReturnValueOnce({
                error: {
                    details: [{
                        context: {key: 'key'},
                        message: 'message'
                    }, {message: 'message2'}, {context: {key: 'key3'}}]
                }
            });

            const results = validateValues(values, schema);

            expect(schema.validate).toHaveBeenCalledWith(values, {abortEarly: false});
            expect(results).toMatchSnapshot();
        });
    });
});
