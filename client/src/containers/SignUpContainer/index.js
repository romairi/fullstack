import React from 'react';
import './index.scss';
import _ from 'lodash';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import {Card} from "../../components/Card";
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import {
    EMAIL_FIELD, EMAIL_FIELD_ERROR,
    CONFIRM_PASSWORD_FIELD, CONFIRM_PASSWORD_FIELD_ERROR,
    PASSWORD_FIELD, PASSWORD_FIELD_ERROR,
    USER_NAME_FIELD,
    USER_NAME_FIELD_ERROR
} from "../BaseContainer/constants";
import '../BaseContainer/base_container.scss';
import {LOGIN_ROUTE} from "../../routes/constants";
import {schemaSign} from '../BaseContainer/validations';

class SignUpContainer extends React.PureComponent {

    state = {
        [USER_NAME_FIELD]: '',
        [EMAIL_FIELD]: '',
        [PASSWORD_FIELD]: '',
        [CONFIRM_PASSWORD_FIELD]: '',
        [USER_NAME_FIELD_ERROR]: '',
        [EMAIL_FIELD_ERROR]: '',
        [PASSWORD_FIELD_ERROR]: '',
        [CONFIRM_PASSWORD_FIELD_ERROR]: '',
    };


    handleChanged = event => {
        const {id, value} = event.target;
        this.setState({[id]: value})
    };


    handleSubmitClicked = event => {
        event.preventDefault();
        const {
            [USER_NAME_FIELD]: user_name,
            [EMAIL_FIELD]: email,
            [PASSWORD_FIELD]: password,
            [CONFIRM_PASSWORD_FIELD]: confirm_password,
            ...restState
        } = this.state;

        const results = schemaSign.validate({
            [USER_NAME_FIELD]: user_name,
            [EMAIL_FIELD]: email,
            [PASSWORD_FIELD]: password,
            [CONFIRM_PASSWORD_FIELD]: confirm_password,
        }, {abortEarly: false});


        if (results.error) {
            const errors = results.error.details.reduce((acc, cur) => {
                acc[cur.context.key] = cur.message;
                return acc
            }, {});

            this.setState({
                [USER_NAME_FIELD_ERROR]: errors[USER_NAME_FIELD],
                [EMAIL_FIELD_ERROR]: errors[EMAIL_FIELD],
                [PASSWORD_FIELD_ERROR]: errors[PASSWORD_FIELD],
                [CONFIRM_PASSWORD_FIELD_ERROR]: errors[CONFIRM_PASSWORD_FIELD]
            });
            return;
        }

        this.setState({
            [USER_NAME_FIELD_ERROR]: '',
            [EMAIL_FIELD_ERROR]: '',
            [PASSWORD_FIELD_ERROR]: '',
            [CONFIRM_PASSWORD_FIELD_ERROR]: ''
        });

        //TODO send to the server
    };

    render() {
        const {
            [USER_NAME_FIELD]: user_name,
            [EMAIL_FIELD]: email,
            [PASSWORD_FIELD]: password,
            [CONFIRM_PASSWORD_FIELD]: confirm_password,
            [USER_NAME_FIELD_ERROR]: user_name_error,
            [EMAIL_FIELD_ERROR]: email_error,
            [PASSWORD_FIELD_ERROR]: password_error,
            [CONFIRM_PASSWORD_FIELD_ERROR]: confirm_password_error
        } = this.state;

        return (
            <div className="base-container">
                <Card>
                    <h2>Sign Up</h2>
                    <form>
                        <TextField
                            error={!_.isEmpty(user_name_error)}
                            helperText={user_name_error}
                            type="text"
                            id={USER_NAME_FIELD}
                            label="UserName"
                            required="required"
                            value={user_name}
                            onChange={this.handleChanged}
                        />
                        <TextField
                            error={!_.isEmpty(email_error)}
                            helperText={email_error}
                            type="email"
                            id={EMAIL_FIELD}
                            label="Email"
                            required="required"
                            value={email}
                            onChange={this.handleChanged}
                        />
                        <TextField
                            error={!_.isEmpty(password_error)}
                            helperText={password_error}
                            type="password"
                            id={PASSWORD_FIELD}
                            label="Password"
                            required="required"
                            value={password}
                            onChange={this.handleChanged}
                        />
                        <TextField
                            error={!_.isEmpty(confirm_password_error)}
                            helperText={confirm_password_error}
                            type="password"
                            id={CONFIRM_PASSWORD_FIELD}
                            label="Confirm Password"
                            required="required"
                            value={confirm_password}
                            onChange={this.handleChanged}
                        />
                        <Button
                            type="submit"
                            onClick={this.handleSubmitClicked}>
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
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);