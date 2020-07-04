export function searchByFields(items, field) {
    return items.filter(item => [item.title, item.summary]
        .map(text => text.toLowerCase())
        .filter(text => text.includes(field.toLowerCase()))
        .length > 0
    );
}
