function formatPaper({ id, categories, links, ...paperArgs } ) {
    const pdfLinkObject = links.find(link => link.title === 'pdf');
    const pdfLink = pdfLinkObject ? pdfLinkObject.href : null;
    return {
        ...paperArgs,
        pdfLink,
        paperId: id,
    };
}

module.exports = {formatPaper};
