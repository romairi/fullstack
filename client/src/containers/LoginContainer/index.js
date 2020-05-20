import React from 'react';
import './index.scss';
import _ from 'lodash';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import {Card} from "../../components/Card/index"
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import {EMAIL_FIELD,  PASSWORD_FIELD} from "../BaseContainer/constants";
import {SIGNUP_ROUTE} from '../../routes/constants';
import {schemaLogin} from './validations';
import useForm from "../../hooks/useForm";

export default function LoginContainer({}) {
    const onSubmit = values => {
        console.log(values);
    };

    const {values, errors, handleChange, handleSubmit} = useForm(schemaLogin, onSubmit);
    return (
        <div className="base-container">
            <Card>
                <h2>Login</h2>
                <form>
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