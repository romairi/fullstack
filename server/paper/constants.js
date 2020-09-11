const MAX_PAPERS_SEARCH = 30;
const MAX_SAVES_SEARCH = 8;
const ERROR_COUNT_SEARCH = 'Exceeding the search limit. If you want to save the current' +
    ' search you must delete one of the previous ones';
const ERROR_UNIQUE_SEARCH = 'The parameters of the search have already existed, your search has not been saved';
const ERROR_INCLUDE_TAG = 'You must fill at least one include tags for searching';
module.exports = {MAX_PAPERS_SEARCH, MAX_SAVES_SEARCH, ERROR_COUNT_SEARCH, ERROR_UNIQUE_SEARCH, ERROR_INCLUDE_TAG};
