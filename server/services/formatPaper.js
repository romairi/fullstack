function formatPaper({ id, categories, links, ...paperArgs } ) {
    const pdfLinkObject = links ? links.find(link => link.title === 'pdf'): ''; // TODO
    const pdfLink = pdfLinkObject ? pdfLinkObject.href : null;
    return {
        ...paperArgs,
        pdfLink,
        paperId: id,
    };
}

module.exports = {formatPaper};
