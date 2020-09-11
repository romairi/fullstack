import React from 'react';
import './index.scss';
import Alert from '@material-ui/lab/Alert';


export default function MessageAlert({error}) {
    return (
        <div className="message_alert">
            {error !== null ? <Alert severity="error">{error}</Alert> : ''}
        </div>
    );
}
