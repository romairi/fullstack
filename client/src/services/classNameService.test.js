import {buildClassName} from "./classNameService";

describe('classNameService', () => {
    describe('buildClassName', () => {
        it('should return concat output', () => {
            expect(buildClassName(['classA', 'classB'])).toBe('classA classB');
        });
        it('should return concat output for the existing classes', () => {
            expect(buildClassName(['classA', false, undefined, null, 'classB'])).toBe('classA classB');
        });
    });
});
