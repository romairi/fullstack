import React from 'react';
import './index.scss'
import _ from "lodash";
import {useDispatch, useSelector} from "react-redux";
import {push} from "connected-react-router";
import {Link} from 'react-router-dom'
import {BASE_ROUTE, LOGIN_ROUTE, SEARCH_PAPER_LIST_ROUTE, MY_SEARCHES} from "../../routes/constants";
import {createSetUserAction} from "../../redux/reducers/UserReducer/actions";
import {logoutAction} from "./actions";
import {buildClassName} from "../../services/classNameService";
import Toolbar from "@material-ui/core/Toolbar";


function NavigationBar({currentLocation}) {
    return (
        <ul className="navigation_bar_list">
            <li className={buildClassName(["navigation_bar_item",
                (currentLocation === BASE_ROUTE) && "selected"])}>
                <Link className="header_btn" to={BASE_ROUTE}>My Papers</Link>
            </li>
            <li className={buildClassName(["navigation_bar_item",
                (currentLocation === SEARCH_PAPER_LIST_ROUTE) && "selected"])}>
                <Link className="header_btn" to={SEARCH_PAPER_LIST_ROUTE}>Search Papers</Link>
            </li>
            <li className={buildClassName(["navigation_bar_item",
                (currentLocation === MY_SEARCHES) && "selected"])}>
                <Link className="header_btn" to={MY_SEARCHES}>My Searches</Link>
            </li>
        </ul>
    )
}

function Header(props) {

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
                <Link
                    className="header_btn"
                    onClick={handleButtonClick}
                    to={LOGIN_ROUTE}
                >{buttonTitle}
                </Link>
            </Toolbar>
        </div>
    )
}

export default Header;
