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
import {Link} from 'react-router-dom'
import {buildClassName} from "../../services/classNameService";

function MenuLinks({currentLocation}) {
    return (
        <>
            <Button
                component={Link}
                className={buildClassName(["header_btn", (currentLocation === BASE_ROUTE) && "selected"])}
                variant="contained"
                size="small"
                to={BASE_ROUTE}
            >My Papers
            </Button>
            <Button
                component={Link}
                className={buildClassName(["header_btn", (currentLocation === SEARCH_PAPER_LIST_ROUTE) && "selected"])}
                variant="contained"
                size="small"
                startIcon={<SearchIcon color="primary" fontSize="large"/>}
                to={SEARCH_PAPER_LIST_ROUTE}
            >
                Search
            </Button>
        </>
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

    const showMenu = _.isEmpty(user) ? null : <MenuLinks currentLocation={currentLocation}/>;
    const titlePage = currentLocation === BASE_ROUTE ? 'My Papers' : 'Search';

    return (
        <div className="header">
            <AppBar position="static">
                <Toolbar className="header_toolbar">
                    <div className="header_menu_links">
                        {showMenu}
                    </div>
                    <div className="header_title">
                        {titlePage}
                    </div>
                    <Button
                        className="header_btn"
                        variant="contained"
                        size="small"
                        onClick={handleButtonClick}>{buttonTitle}
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}
