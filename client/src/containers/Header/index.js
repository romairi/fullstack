import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import _ from 'lodash';
import './index.scss'
import {LOGIN_ROUTE} from '../../routes/constants';
import {push} from "connected-react-router";
import {logoutAction} from "./actions";
import Button from '@material-ui/core/Button';

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
        <header className="header">
            <nav className="main-nav">
                <ul className="main-nav-items">
                    <li className="main-nav-item">
                        <Button
                            className="header-btn"
                            variant="contained"
                            size="medium"
                            color="secondary"
                            onClick={handleButtonClick}>{buttonTitle}
                        </Button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}