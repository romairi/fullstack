import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './index.scss';


export default function Spinner() {
    return <CircularProgress className="spinner" disableShrink />;
}
