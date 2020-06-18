// import React from 'react';
// import _ from 'lodash';
// import {push} from "connected-react-router";
// import {createSetUserAction} from "../../redux/reducers/UserReducer/actions";
// import {logoutAction} from "./actions";
// import {useSelector, useDispatch} from "react-redux";
// import {BASE_ROUTE, LOGIN_ROUTE, SEARCH_PAPER_LIST_ROUTE} from '../../routes/constants';
// import Button from '@material-ui/core/Button';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
//
//
// function SimpleMenu() {
//     const user = useSelector(state => state.user);
//     const dispatch = useDispatch();
//     const [anchorEl, setAnchorEl] = React.useState(null);
//
//     function onLogoutSuccess() {
//         dispatch(createSetUserAction(null));
//         dispatch(push(LOGIN_ROUTE));
//     }
//
//     function handleButtonClick() {
//         if (_.isEmpty(user)) {
//             dispatch(push(LOGIN_ROUTE));
//         } else {
//             dispatch(logoutAction({
//                 onSuccess: onLogoutSuccess,
//                 onError: err => console.log(err),
//             }));
//         }
//     }
//
//     const handleClick = (event) => {
//         setAnchorEl(event.currentTarget);
//     };
//
//     const handleClose = () => {
//         setAnchorEl(null);
//     };
//     const buttonTitle = _.isEmpty(user) ? 'Login' : 'Logout';
//
//     const butUserStatus = <Button
//         className="header-btn"
//         variant="contained"
//         size="medium"
//         color="secondary"
//         onClick={handleButtonClick}>{buttonTitle}
//     </Button>;
//
//     const menu =
//         <div>
//             <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
//                 Open Menu
//             </Button>
//             <Menu
//                 id="simple-menu"
//                 anchorEl={anchorEl}
//                 keepMounted
//                 open={Boolean(anchorEl)}
//                 onClose={handleClose}
//             >
//                 <MenuItem onClick={handleClose}>
//                     <Button
//                         className="header-btn"
//                         variant="contained"
//                         size="small"
//                         color="default"
//                         href={BASE_ROUTE}
//                     >My Papers
//                     </Button>
//                 </MenuItem>
//                 <MenuItem onClick={handleClose}>
//                     <Button
//                         className="header-btn"
//                         variant="contained"
//                         size="medium"
//                         color="default"
//                         href={SEARCH_PAPER_LIST_ROUTE}
//                     >Search
//                     </Button>
//                 </MenuItem>
//                 <MenuItem onClick={handleClose}>
//                     {butUserStatus}
//                 </MenuItem>
//             </Menu>
//         </div>;
//
//
//     const menuTitle = _.isEmpty(user) ? butUserStatus : menu;
//
//     return (
//         menuTitle
//     )
// }
//
// export default SimpleMenu;
