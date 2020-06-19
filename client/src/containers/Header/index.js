import React from 'react';
import './index.scss'
import _ from "lodash";
import {useDispatch, useSelector} from "react-redux";
import {createSetUserAction} from "../../redux/reducers/UserReducer/actions";
import {push} from "connected-react-router";
import {BASE_ROUTE, LOGIN_ROUTE, SEARCH_PAPER_LIST_ROUTE} from "../../routes/constants";
import {logoutAction} from "./actions";
import AppBar from '@material-ui/core/AppBar';
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import SearchIcon from '@material-ui/icons/Search';

function ActionButton({id, children, onClick}) {
    return (<Button
        className="header_btn"
        variant="contained"
        color="primary"
        size="medium"
        onClick={() => onClick(id)}
    >
        {children}
    </Button>);
}


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
                <Toolbar className="header_toolbar">
                    <Button
                        className="header_btn"
                        variant="contained"
                        size="medium"
                        color="default"
                        href={BASE_ROUTE}
                    >My Papers
                    </Button>
                    <Button
                        className="header_btn"
                        variant="contained"
                        size="medium"
                        color="default"
                        startIcon={<SearchIcon color="primary" fontSize="large" />}
                        href={SEARCH_PAPER_LIST_ROUTE}
                    >
                        Search
                    </Button>
                    <Button
                        className="header_btn"
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
