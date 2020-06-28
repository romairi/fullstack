import React from 'react';
import './index.scss';
import CircularProgress from '@material-ui/core/CircularProgress';
import {buildClassName} from "../../services/classNameService";


export default function SpinnerContainer({children, isLoading}) {
    return (
        <div className={buildClassName(["spinner_container", isLoading && "loading"])}>
            {isLoading ? <CircularProgress className="spinner" disableShrink/> : children}
        </div>
    );
}
