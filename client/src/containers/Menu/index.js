import React from 'react';
import _ from 'lodash';
import {push} from "connected-react-router";
import {createSetUserAction} from "../../redux/reducers/UserReducer/actions";
import {logoutAction} from "./actions";
import {useSelector, useDispatch} from "react-redux";
import {LOGIN_ROUTE} from '../../routes/constants';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


function SimpleMenu() {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState(null);

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

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Open Menu
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>MyPapers</MenuItem>
                <MenuItem onClick={handleClose}>Search</MenuItem>
                <MenuItem onClick={handleClose}>
                    <Button
                        className="header-btn"
                        variant="contained"
                        size="medium"
                        color="secondary"
                        onClick={handleButtonClick}>{buttonTitle}
                    </Button>
                </MenuItem>
            </Menu>
        </div>
    );
}

export default SimpleMenu;
