function formatPaper({id, links, ...paperArgs}) {
    const pdfLinkObject = Array.isArray(links) ? links.find(link => link.title === 'pdf') : null;
    const pdfLink = pdfLinkObject ? pdfLinkObject.href : null;
    return {
        ...paperArgs,
        pdfLink,
        paperId: id,
    };
}

module.exports = {formatPaper};
