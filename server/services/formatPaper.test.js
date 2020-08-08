const {formatPaper} = require('./formatPaper');


describe('formatPaper', () => {
    it('should return formatted paper', () => {
        expect(formatPaper()).toEqual(expect.objectContaining({
            paperId: expect.any(String),
            categories: expect.any(String),
            links: expect.any(Array),

        }))
    });
});

// function formatPaper({ id, categories, links, ...paperArgs } ) {
//     const pdfLinkObject = links.find(link => link.title === 'pdf');
//     const pdfLink = pdfLinkObject ? pdfLinkObject.href : null;
//     return {
//         ...paperArgs,
//         pdfLink,
//         paperId: id,
//     };
// }
//
// module.exports = {formatPaper};
