const {uniqueSearch} = require('./addUniqueSearchService');

const searchMock = [
    {include_tags: ["deep"], exclude_tags: ["dee"],},
    {include_tags: ["knn", "deep"], exclude_tags: ["deep", "lost", "rgb"],},
    {include_tags: ["knn"], exclude_tags: ["deep", "lost", "rgb"],},
];

describe('addUniqueSearchService', () => {
    describe('uniqueSearch', () => {

        it('should return false - the search exists because include and exclude tags are equal', () => {
            expect(uniqueSearch(searchMock, ["knn", "deep"], ["deep", "lost", "rgb"])).toBeFalsy();
        });

        it('should return true - the array of include_tags is unique and exclude_tags is empty', () => {
            expect(uniqueSearch(searchMock, ["knn"], [])).toBeTruthy();
        });
        it('should return true - the array of include_tags is unique and exclude_tags does not exists', () => {
            expect(uniqueSearch(searchMock, ["knn"])).toBeTruthy();
        });
        it('should return true - array of include and exclude tags is empty', () => {
            expect(uniqueSearch(searchMock, [], [])).toBeTruthy();
        });
        it('should return true - the array of include_tags does not exists and exclude_tags is unique', () => {
            expect(uniqueSearch(searchMock, [], ["knn"])).toBeTruthy();
        });
        it('should return true - the array of include_tags exists in the list of searches,' +
            ' but array exclude_tags is unique - the array of exclude_tags is empty ', () => {
            expect(uniqueSearch(searchMock, ["knn", "deep"], [undefined, null])).toBeTruthy();
        });
        it('should return true - the array of exclude_tags is unique (instead of undefined and null we get empty array)' +
            'in the list of searches,' + 'but array of include_tags is empty', () => {
            expect(uniqueSearch(searchMock, [undefined, null, ''], ["knn", "deep"])).toBeTruthy();
        });
        it('should return false - in the search exists an array of include_tags and exclude_tags,' +
            'instead of undefined and null we get only knn in the first array', () => {
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
