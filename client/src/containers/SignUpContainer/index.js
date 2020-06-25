import React from 'react';
import './index.scss';
import _ from 'lodash';
import {useDispatch} from "react-redux";
import {Link} from 'react-router-dom';
import {replace} from "connected-react-router";
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {
    EMAIL_FIELD,
    CONFIRM_PASSWORD_FIELD,
    PASSWORD_FIELD,
    USER_NAME_FIELD,
} from "./constants";
import {BASE_ROUTE, LOGIN_ROUTE} from "../../routes/constants";
import {schemaSignIn} from './validations';
import useForm from "../../hooks/useForm";
import {signupAction} from './actions';
import {createSetUserAction} from "../../redux/reducers/UserReducer/actions";
import {GENERAL_ERROR_FIELD} from "../../hooks/constants";
import LockIcon from '@material-ui/icons/Lock';
import EmailIcon from '@material-ui/icons/Email';
import PersonIcon from '@material-ui/icons/Person';

const Error = ({message}) => (
    message ?
        <p className='server_error'>
            {message}
        </p> : null
);

export default function SignUpContainer({}) {
    const dispatch = useDispatch();

    const onSuccess = response => {
        dispatch(createSetUserAction(response.data));
        dispatch(replace(BASE_ROUTE));
    };


    const onSubmit = (values, handleServerError) => {
        dispatch(signupAction({data: values, onSuccess, onError: handleServerError}));
    };

    const {values, errors, handleChange, handleSubmit} = useForm(schemaSignIn, onSubmit);

    return (
        <div className="base_container">
            <Card className='signup_container'>
                <h2 className="title_signup">Sign Up</h2>
                <form className="form_signup">
                    <div className="textField_user_name">
                        <PersonIcon className="icon_user_name"/>
                        <TextField
                            margin="dense"
                            error={!_.isEmpty(errors[USER_NAME_FIELD])}
                            helperText={errors[USER_NAME_FIELD]}
                            type="text"
                            id={USER_NAME_FIELD}
                            label="Username"
                            value={values[USER_NAME_FIELD]}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="textField_email">
                        <EmailIcon className="icon_email"/>
                        <TextField
                            margin="dense"
                            error={!_.isEmpty(errors[EMAIL_FIELD])}
                            helperText={errors[EMAIL_FIELD]}
                            type="email"
                            id={EMAIL_FIELD}
                            label="Email"
                            value={values[EMAIL_FIELD]}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="textField_password">
                        <LockIcon className="icon_password"/>
                        <TextField
                            margin="dense"
                            error={!_.isEmpty(errors[PASSWORD_FIELD])}
                            helperText={errors[PASSWORD_FIELD]}
                            type="password"
                            id={PASSWORD_FIELD}
                            label="Password"
                            value={values[PASSWORD_FIELD]}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="textField_password">
                        <LockIcon className="icon_password"/>

                        <TextField
                            margin="dense"
                            error={!_.isEmpty(errors[CONFIRM_PASSWORD_FIELD])}
                            helperText={errors[CONFIRM_PASSWORD_FIELD]}
                            type="password"
                            id={CONFIRM_PASSWORD_FIELD}
                            label="Confirm Password"
                            value={values[CONFIRM_PASSWORD_FIELD]}
                            onChange={handleChange}
                        />
                    </div>
                    <Error message={errors[GENERAL_ERROR_FIELD]}/>
                    <Button
                        className="base_container_btn"
                        type="submit"
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}>
                        Sign Up
                    </Button>
                </form>
                <div className="nav_another_page">
                    Already have an account?
                    <Link to={LOGIN_ROUTE}>
                        <strong>Login here</strong>
                    </Link>
                </div>
            </Card>
        </div>
    );
}
