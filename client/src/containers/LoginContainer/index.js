import React from 'react';
import './index.scss';
import _ from 'lodash';
import {useDispatch} from "react-redux";
import {Link} from 'react-router-dom';
import {replace} from "connected-react-router";
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LockIcon from '@material-ui/icons/Lock';
import EmailIcon from '@material-ui/icons/Email';
import {EMAIL_FIELD, PASSWORD_FIELD} from "./constants";
import {BASE_ROUTE, SIGNUP_ROUTE} from '../../routes/constants';
import {schemaLogin} from './validations';
import useForm from "../../hooks/useForm";
import {loginAction} from './actions';
import {createSetUserAction} from "../../redux/reducers/UserReducer/actions";
import {GENERAL_ERROR_FIELD} from "../../hooks/constants";
import InputAdornment from "@material-ui/core/InputAdornment";


const Error = ({message}) => (
    message ?
        <p className='server_error'>
            {message}
        </p> : null
);


export default function LoginContainer({}) {

    const dispatch = useDispatch();

    const onSuccess = response => {
        dispatch(createSetUserAction(response.data));
        dispatch(replace(BASE_ROUTE));
    };

    const onSubmit = (values, handleServerError) => {
        dispatch(loginAction({data: values, onSuccess, onError: handleServerError}))
    };

    const {values, errors, handleChange, handleSubmit} = useForm(schemaLogin, onSubmit);
    return (
        <div className="base_container">
            <Card className="login_container">
                <h2 className="title_login"><strong>Login</strong></h2>
                <form className="form_login">
                    <TextField
                        className="text_field"
                        margin="dense"
                        error={!_.isEmpty(errors[EMAIL_FIELD])}
                        helperText={errors[EMAIL_FIELD]}
                        type="email"
                        id={EMAIL_FIELD}
                        label="Email"
                        value={values[EMAIL_FIELD] || ''}
                        onChange={handleChange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <EmailIcon className="icon"/>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        className="text_field"
                        margin="dense"
                        error={!_.isEmpty(errors[PASSWORD_FIELD])}
                        helperText={errors[PASSWORD_FIELD]}
                        type="password"
                        id={PASSWORD_FIELD}
                        label="Password"
                        value={values[PASSWORD_FIELD] || ''}
                        onChange={handleChange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockIcon className="icon"/>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Error message={errors[GENERAL_ERROR_FIELD]}/>
                    <Button
                        className="base_container_btn"
                        variant="contained" color="primary"
                        type="submit"
                        onClick={handleSubmit}>
                        Sign In
                    </Button>
                </form>
                <div className="nav_another_page">
                    Don't have an account?
                    <Link to={SIGNUP_ROUTE}>
                        <strong>Sign up</strong>
                    </Link>
                </div>
            </Card>
        </div>
    );
}
