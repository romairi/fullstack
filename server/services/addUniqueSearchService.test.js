const {uniqueSearch} = require('./addUniqueSearchService');

describe('addUniqueSearchService', () => {
    describe('uniqueSearch', () => {
        const search = [
            {include_tags: ["deep"], exclude_tags: ["dee"],},
            {include_tags: ["knn", "deep"], exclude_tags: ["deep", "lost", "rgb"],},
            {include_tags: ["knn"], exclude_tags: ["deep", "lost", "rgb"],},
        ];

        it('should return an unique search', () => {
            expect(uniqueSearch(search, ["knn", "deep"], ["deep", "lost", "rgb"])).toBeFalsy();
            expect(uniqueSearch(search, ["knn"], ["deep", "lost", "rgb"])).toBeFalsy();
            expect(uniqueSearch(search, ["knn"], [])).toBeTruthy();
            expect(uniqueSearch(search, [], ["knn"])).toBeTruthy();
            expect(uniqueSearch(search, [], [])).toBeTruthy();
            expect(uniqueSearch(search, ["knn", "deep"], [undefined, null])).toBeTruthy();
            expect(uniqueSearch(search, [undefined, null], ["knn", "deep"])).toBeTruthy();
            expect(uniqueSearch(search, [undefined, null, "knn"], ["deep", "lost", "rgb"])).toBeTruthy(); // TODO it must return false
        });

    });
});
