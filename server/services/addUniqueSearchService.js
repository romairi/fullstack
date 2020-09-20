function formatSearchTags(listTags) {
    return listTags.map(tag => tag.toLowerCase()).sort().join();
}

function generateUniqueKey(includeTags, excludeTags) {
    return `INCLUDE:${formatSearchTags(includeTags)} EXCLUDE:${formatSearchTags(excludeTags)}`;
}

function uniqueSearch(userSearches, includeTags, excludeTags) {
    const includeList = userSearches.map(s => generateUniqueKey(s.include_tags, s.exclude_tags));
    const newSearchKey = generateUniqueKey(includeTags, excludeTags);
    return !includeList.find(key => key === newSearchKey);
}

module.exports = {uniqueSearch};
