import React from 'react';
import {buildClassName} from "../../services/classNameService";
import Card from '@material-ui/core/Card';
import './index.scss';
import Button from "@material-ui/core/Button";
import SaveIcon from '@material-ui/icons/Save';

function PaperItem(props) {
    const {className, title, summary, authors, pdfLink, publishedDate, updatedDate, onSaveButtonClicked, id} = props;

    const authorsNames = authors.join(', ');

    return (
        <div className={buildClassName(['paper_item_container', className])}>
            <Card className="paper_item_card">
                <div className='paper_item_header'>
                    <h3 className='paper_item_title'>{title}</h3>

                </div>
                <p className='paper_item_summary'>
                    {summary}
                </p>
                <span className='paper_item_published_authors'>
                    <strong>Authors:</strong> {authorsNames}
                </span>

                <div className='paper_item_footer'>
                    <Button
                        component="a"
                        target='_blank'
                        href={pdfLink}
                        onClick={e => e.preventDefault}
                        color="secondary"
                        variant="contained"
                        rel="noreferrer">
                        PDF link
                    </Button>
                    <div className="paper_item_meta">
                        <span className='paper_item_published_date'>
                            <strong>Published Date:</strong> {publishedDate}
                        </span>
                        <span className='paper_item_updated_date'>
                           <strong>Updated Date:</strong> {updatedDate}
                        </span>
                    </div>

                </div>
                <div className="paper_item_save">
                    <Button
                        className="btn_save"
                        variant="contained"
                        color="primary"
                        size="large"
                        startIcon={<SaveIcon/>}
                        onClick={() => onSaveButtonClicked(id)}
                    >
                        Save
                    </Button>
                </div>
            </Card>
        </div>
    );


}

export default PaperItem;
