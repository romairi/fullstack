export function findCategoryByPaperId(categories, paperId) {
    return categories.find(c => c.paperItems.find(paper => paper.paperId === paperId));
}
