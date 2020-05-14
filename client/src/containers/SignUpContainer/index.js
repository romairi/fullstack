import React from 'react';
import './index.scss';
import _ from 'lodash';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import {Card} from "../../components/Card";
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import {
    EMAIL_FIELD,
    CONFIRM_PASSWORD_FIELD,
    PASSWORD_FIELD,
    USER_NAME_FIELD,
} from "../BaseContainer/constants";
import '../BaseContainer/base_container.scss';
import {LOGIN_ROUTE} from "../../routes/constants";
import {schemaSignIn} from './validations';
import useForm from "../../hooks/useForm";

export default function SignUpContainer({}) {

    const onSubmit = values => {
        console.log(values);
    };

    const {values, errors, handleChange, handleSubmit} = useForm(schemaSignIn, onSubmit);

    return (
        <div className="base-container">
            <Card>
                <h2>Sign Up</h2>
                <form>
                    <TextField
                        error={!_.isEmpty(errors[USER_NAME_FIELD])}
                        helperText={errors[USER_NAME_FIELD]}
                        type="text"
                        id={USER_NAME_FIELD}
                        label="UserName"
                        required="required"
                        value={values[USER_NAME_FIELD]}
                        onChange={handleChange}
                    />
                    <TextField
                        error={!_.isEmpty(errors[EMAIL_FIELD])}
                        helperText={errors[EMAIL_FIELD]}
                        type="email"
                        id={EMAIL_FIELD}
                        label="Email"
                        required="required"
                        value={values[EMAIL_FIELD]}
                        onChange={handleChange}
                    />
                    <TextField
                        error={!_.isEmpty(errors[PASSWORD_FIELD])}
                        helperText={errors[PASSWORD_FIELD]}
                        type="password"
                        id={PASSWORD_FIELD}
                        label="Password"
                        required="required"
                        value={values[PASSWORD_FIELD]}
                        onChange={handleChange}
                    />
                    <TextField
                        error={!_.isEmpty(errors[CONFIRM_PASSWORD_FIELD])}
                        helperText={errors[CONFIRM_PASSWORD_FIELD]}
                        type="password"
                        id={CONFIRM_PASSWORD_FIELD}
                        label="Confirm Password"
                        required="required"
                        value={values[CONFIRM_PASSWORD_FIELD]}
                        onChange={handleChange}
                    />
                    <Button
                        type="submit"
                        onClick={handleSubmit}>
                        Sign Up
                    </Button>
                </form>
                <div className="nav-another-page">
                    Already have an account?
                    <Link to={LOGIN_ROUTE}> Login here</Link>
                </div>
            </Card>
        </div>
    );
}
