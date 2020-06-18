import React from 'react';
import './index.scss'
import _ from "lodash";
import {useDispatch, useSelector} from "react-redux";
import {createSetUserAction} from "../../redux/reducers/UserReducer/actions";
import {push} from "connected-react-router";
import {LOGIN_ROUTE} from "../../routes/constants";
import {logoutAction} from "./actions";
import AppBar from '@material-ui/core/AppBar';
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";


export default function Header() {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const buttonTitle = _.isEmpty(user) ? 'Login' : 'Logout';

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
