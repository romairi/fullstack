import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import _ from 'lodash';
import './index.scss'
import {LOGIN_ROUTE} from '../../routes/constants';
import {push} from "connected-react-router";
import {logoutAction} from "./actions";
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import {createSetUserAction} from "../../redux/reducers/UserReducer/actions";

export default function Header() {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    function onLogoutSuccess() {
        dispatch(createSetUserAction(null));
        dispatch(push(LOGIN_ROUTE));
    }

    function handleButtonClick() {
        if (_.isEmpty(user)) {
            dispatch(push(LOGIN_ROUTE));
        } else {
            dispatch(logoutAction({
                onSuccess: onLogoutSuccess,
                onError: err => console.log(err),
            }));
        }
    }

    const buttonTitle = _.isEmpty(user) ? 'Login' : 'Logout';

    return (
    <div className="header">
        <AppBar position="static">
            <Toolbar>
                <Button
                    className="header-btn"
                    variant="contained"
                    size="medium"
                    color="secondary"
                    onClick={handleButtonClick}>{buttonTitle}
                </Button>
            </Toolbar>
        </AppBar>
    </div>
    )
}
