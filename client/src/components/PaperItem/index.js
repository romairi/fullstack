import React from 'react';
import './index.scss';
import {buildClassName} from "../../services/classNameService";
import Card from '@material-ui/core/Card';
import Button from "@material-ui/core/Button";
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';


export function ActionButton({id, startIcon, children, onClick}) {
    return (<Button
        className="btn_save"
        variant="contained"
        color="primary"
        size="large"
        startIcon={startIcon}
        onClick={() => onClick(id)}
    >
        {children}
    </Button>);
}

function PaperItem(props) {
    const {
        className, title, summary, authors, pdfLink, publishedDate,
        updatedDate, onSaveButtonClicked, onRemoveButtonClicked, id, paperExist,
    } = props;

    const authorsNames = authors !== undefined ? authors.join(', ') : '';
    const buttonIcon = paperExist ? <DeleteIcon/> : <SaveIcon/>;
    const buttonOnClick = paperExist ? onRemoveButtonClicked : onSaveButtonClicked;
    const buttonText = paperExist ? 'Remove' : 'Save';

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
                    <strong className="authors_title">Authors:</strong> {authorsNames}
                </span>
                <div className='paper_item_footer'>
                    <Button
                        className="paper_item_footer_btn"
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
                            <strong className="data_title">Published Date:</strong> {publishedDate}
                        </span>
                        <span className='paper_item_updated_date'>
                           <strong className="data_title">Updated Date:</strong> {updatedDate}
                        </span>
                    </div>
                </div>
                <div className="paper_item_save">
                    <ActionButton id={id} startIcon={buttonIcon} onClick={buttonOnClick}>
                        {buttonText}
                    </ActionButton>
                </div>
            </Card>
        </div>
    );
}

export default PaperItem;
