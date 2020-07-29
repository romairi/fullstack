import React from 'react';
import "./index.scss";
import Button from "@material-ui/core/Button";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {buildClassName} from "../../services/classNameService";


function Pagination({page, className, onChangePage, isLastPage}) {
    return (
        <div className={buildClassName(["pagination", className])}>
            <Button className={buildClassName(["pagination_button", "button_left", (page === 0) && "disable"])}
                    disabled={page === 0} onClick={() => onChangePage(page - 1)}>
                <ChevronLeftIcon fontSize="large"/>
            </Button>
            <span className="pagination_page_number">{page}</span>
            <Button className={buildClassName(["pagination_button", "button_right", isLastPage && "disable"])}
                    disabled={isLastPage} onClick={() => onChangePage(page + 1)}>
                <ChevronRightIcon fontSize="large"/>
            </Button>
        </div>
    );
}

export default Pagination;
