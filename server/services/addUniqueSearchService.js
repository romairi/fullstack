function formatSearchTags(listTags) {
    return listTags.map(tag => tag.toLowerCase()).sort().join();
}

function uniqueSearch(userSearches, includeTags, excludeTags) {
    const includeList = [];
    const excludeList = [];
    let i = 0;

    while (userSearches.length > i) {
        includeList.push(formatSearchTags(userSearches[i].include_tags));
        excludeList.push(formatSearchTags(userSearches[i].exclude_tags));
        i++;
    }

    const searchIncTags = formatSearchTags(includeTags.map(item => item));
    const searchExcTags = formatSearchTags(excludeTags.map(item => item));
    const foundInclude = includeList.find(item => item === searchIncTags);
    const foundExclude = excludeList.find(item => item === searchExcTags);
    const includeTagExists = searchIncTags.includes(foundInclude);
    const excludeTagExists = searchExcTags.includes(foundExclude);

    return (includeTagExists && excludeTagExists);
}

module.exports = {uniqueSearch};
