export function searchByFields(items, field) {
    return items.filter(item => [item.title, item.summary, ...item.authors.filter(a => Array.isArray(a) && a.length > 0).map(a => a[0])]
        .map(text => text.toLowerCase())
        .filter(text => text.includes(field.toLowerCase()))
        .length > 0
    );
}
