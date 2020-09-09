import React from 'react';
import {Box, Item, A} from 'react-html-email';

const cardStyle = {
    backgroundColor: "#f7f7f7",
    padding: "10px 20px",
};

export default function PaperCard({paper}) {
    return (
        <Box cellspacing={20}>
            <Item style={cardStyle}>
                <h3>{paper.title}</h3>

                <h4>Summary:</h4>
                <p>
                    {paper.summary}
                </p>
                <A href={paper.id} textDecoration="none">View the paper on arXiv</A>
            </Item>
        </Box>
    )
};
