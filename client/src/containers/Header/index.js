import React from 'react';
import './index.scss'
import _ from "lodash";
import {useDispatch, useSelector} from "react-redux";
import {createSetUserAction} from "../../redux/reducers/UserReducer/actions";
import {push} from "connected-react-router";
import {BASE_ROUTE, LOGIN_ROUTE, SEARCH_PAPER_LIST_ROUTE} from "../../routes/constants";
import {logoutAction} from "./actions";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import {Link} from 'react-router-dom'
import {buildClassName} from "../../services/classNameService";


function NavigationBar({currentLocation}) {
    return (
        <ul className="navigation_bar_list">
            <li className={buildClassName(["navigation_bar_item",
                (currentLocation === BASE_ROUTE) && "selected"])}>
                <Link to={BASE_ROUTE}>My Papers</Link>
            </li>
            <li className={buildClassName(["navigation_bar_item",
                (currentLocation === SEARCH_PAPER_LIST_ROUTE) && "selected"])}>
                <Link to={SEARCH_PAPER_LIST_ROUTE}>Search Papers</Link>
            </li>
        </ul>
    )
}

export default function Header(props) {

    const user = useSelector(state => state.user);
    const router = useSelector(state => state.router);
    const dispatch = useDispatch();
    const buttonTitle = _.isEmpty(user) ? 'Login' : 'Logout';
    const currentLocation = router.location.pathname;

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

    const showMenu = _.isEmpty(user) ? null : <NavigationBar currentLocation={currentLocation}/>;

    return (
        <div className="header">
            <Toolbar className="header_toolbar">
                <div className="navigation_bar">
                    {showMenu}
                </div>
                <Button
                    className="header_btn"
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={handleButtonClick}>{buttonTitle}
                </Button>
            </Toolbar>
        </div>
    )
}
