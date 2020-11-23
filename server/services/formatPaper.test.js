const {formatPaper} = require('./formatPaper');

const idMock = 'MOCK_ID';
const linksMock = [{href: 'http://arxiv.org/abs/2005.12184v2', rel: 'alternate', type: 'text/html'},
    {title: 'pdf', href: 'http://arxiv.org/pdf/2005.12184v2', rel: 'related', type: 'application/pdf'}];


describe('formatPaper', () => {
    it('should return formatted paper without any link', () => {
        const res = formatPaper({
            id: idMock,
            links: [{href: 'http://arxiv.org/abs/2005.12184v2', rel: 'alternate', type: 'text/html'}],
            someArg: '123'
        });
        expect(res).toMatchSnapshot();
    });

    it('should return formatted paper without any link - the links arg is no an array', () => {
        const res = formatPaper({
            id: idMock,
            links: 'MOCK_LINK',
            someArg: '123'
        });
        expect(res).toMatchSnapshot();
    });

    it('should return formatted paper including link', () => {
        const res = formatPaper({
            id: idMock,
            links: linksMock,
            someArg: '123'
        });
        expect(res).toMatchSnapshot();
    });
    it('should return formatted paper without additional args', () => {
        const res = formatPaper({
            id: idMock,
            links: linksMock,
        });
        expect(res).toMatchSnapshot();
    });
});

