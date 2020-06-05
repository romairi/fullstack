import React from 'react';
import {buildClassName} from "../../services/classNameService";
import Link from "@material-ui/core/Link";

function PaperItem(props) {
    const {className, title, summary, authors, pdfLink, publishedDate, updatedDate} = props;

    const authorsNames = authors.join(', ');

    return (
        <div className={buildClassName(['paper_item_container', className])}>
            <div className='paper_item_header'>
                <h3 className='paper_item_title'>{title}</h3>
                <span className='paper_item_published_date'>{publishedDate}</span>
                <span className='paper_item_updated_date'>{updatedDate}</span>
            </div>
            <p className='paper_item_summary'>
                {summary}
            </p>
            <div className='paper_item_footer'>
                <Link
                    component="a"
                    target='_blank'
                    href={pdfLink}
                    onClick={e => e.preventDefault}
                    color="inherit"
                    rel="noreferrer">
                    PDF link
                </Link>
                <span className='paper_item_published_authors'>Authors: {authorsNames}</span>
            </div>
        </div>
    );
}

export default PaperItem;
