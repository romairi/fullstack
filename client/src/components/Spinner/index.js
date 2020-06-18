import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './index.scss';


export default function SpinnerContainer({children, isLoading}) {
    return (
        <>
            {isLoading ? <CircularProgress className="spinner" disableShrink/> : children}
            {isLoading ? <CircularProgress className="spinner2" color="secondary" disableShrink/> : children}
        </>
    );
}
