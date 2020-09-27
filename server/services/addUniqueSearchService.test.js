const {uniqueSearch} = require('./addUniqueSearchService');

const searchMock = [
    {include_tags: ["deep"], exclude_tags: ["dee"],},
    {include_tags: ["knn", "deep"], exclude_tags: ["deep", "lost", "rgb"],},
    {include_tags: ["knn"], exclude_tags: ["deep", "lost", "rgb"],},
];

describe('addUniqueSearchService', () => {
    describe('uniqueSearch', () => {

        it('should return an unique search', () => {
            expect(uniqueSearch(searchMock, ["knn", "deep"], ["deep", "lost", "rgb"])).toBeFalsy();

            expect(uniqueSearch(searchMock, ["knn"], [])).toBeTruthy();
            expect(uniqueSearch(searchMock, ["knn"])).toBeTruthy();
            expect(uniqueSearch(searchMock, [], ["knn"])).toBeTruthy();
            expect(uniqueSearch(searchMock, [], [])).toBeTruthy();
            expect(uniqueSearch(searchMock, ["knn", "deep"], [undefined, null])).toBeTruthy();
            expect(uniqueSearch(searchMock, [undefined, null, ''], ["knn", "deep"])).toBeTruthy();
            expect(uniqueSearch(searchMock, [undefined, null, "knn"], ["deep", "lost", "rgb"])).toBeFalsy();
        });
        it('should return false - the search already exists', () => {
            expect(uniqueSearch(searchMock, ["knn"], ["deep", "lost", "rgb"])).toBeFalsy();
        });
        it('should return true - the tags exists but not in the same list', () => {
            expect(uniqueSearch(searchMock, ["deep", "dee"], [])).toBeTruthy();
        });
    });
});
