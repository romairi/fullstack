import React from 'react';
import {Email, Box, A, Span} from 'react-html-email';
import PaperCard from '../PaperCard';

export default function PaperList({papers}) {

    const paperCards = papers.map(paper => <PaperCard paper={paper}/>);
    return (
        <Email title="New Papers">
            {paperCards}
        </Email>
    )
};
