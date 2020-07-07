import React from 'react';
import './index.scss';
import {buildClassName} from "../../services/classNameService";
import CircularProgress from '@material-ui/core/CircularProgress';


export default function SpinnerContainer({children, isLoading}) {
    return (
        <div className={buildClassName(["spinner_container", isLoading && "loading"])}>
            {isLoading ? <CircularProgress className="spinner" disableShrink/> : children}
        </div>
    );
}
