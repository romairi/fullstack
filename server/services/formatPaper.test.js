const {formatPaper} = require('./formatPaper');


const linksMock = [{href: 'http://arxiv.org/abs/2005.12184v2', rel: 'alternate', type: 'text/html'},
    {title: 'pdf', href: 'http://arxiv.org/pdf/2005.12184v2', rel: 'related', type: 'application/pdf'}];


describe('formatPaper', () => {

    it('should return formatted paper', () => {
        let id = "5f6dea444adfc33d71232cd6";
    });

    it('should return formatted paper', () => {
        let id = "5f6dea444adfc33d71232cd6";
        let paperId = 'http://arxiv.org/pdf/2005.12184v2';
        let pdfLink = {title: 'pdf', href: 'http://arxiv.org/pdf/2005.12184v2', rel: 'related', type: 'application/pdf'};
        expect(formatPaper({id, paperId, linksMock, pdfLink})).toEqual('href');
    });

});

