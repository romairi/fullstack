import React from 'react';
import './index.scss';
import _ from 'lodash';
import {useDispatch} from "react-redux";
import {Link} from 'react-router-dom';
import {replace} from "connected-react-router";
import {Card} from "../../components/Card/index"
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import {EMAIL_FIELD, PASSWORD_FIELD} from "./constants";
import {BASE_ROUTE, SIGNUP_ROUTE} from '../../routes/constants';
import {schemaLogin} from './validations';
import useForm from "../../hooks/useForm";
import {loginAction} from './actions';
import {createSetUserAction} from "../../redux/reducers/UserReducer/actions";
import {GENERAL_ERROR_FIELD} from "../../hooks/constants";


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
        <div className="base-container">
            <Card className="login_container">
                <h2>Login</h2>
                <form className="form-login">
                    <TextField
                        error={!_.isEmpty(errors[EMAIL_FIELD])}
                        helperText={errors[EMAIL_FIELD]}
                        type="email"
                        id={EMAIL_FIELD}
                        label="Email"
                        value={values[EMAIL_FIELD]}
                        onChange={handleChange}
                    />
                    <TextField
                        error={!_.isEmpty(errors[PASSWORD_FIELD])}
                        helperText={errors[PASSWORD_FIELD]}
                        type="password"
                        id={PASSWORD_FIELD}
                        label="Password"
                        value={values[PASSWORD_FIELD]}
                        onChange={handleChange}
                    />
                    <Error message={errors[GENERAL_ERROR_FIELD]} />
                    <Button
                        type="submit"
                        onClick={handleSubmit}>
                        Sign In
                    </Button>
                </form>
                <div className="nav-another-page">
                    Don't have an account?
                    <Link to={SIGNUP_ROUTE}> Sign up</Link>
                </div>
            </Card>
        </div>
    );
}