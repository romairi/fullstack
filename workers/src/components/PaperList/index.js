import React from 'react';
import {Email, Box, A, Span} from 'react-html-email';
import PaperCard from '../PaperCard';

// TODO improve the style

export default function PaperList({papers}) {

    const paperCards = papers.map(paper => <PaperCard paper={paper}/>);
//TODO add the exclude and the include list to the email
    return (
        <Email title="New Papers">
            {paperCards}
        </Email>
    )
};
