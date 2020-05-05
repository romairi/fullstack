import React from 'react';
import './index.scss';
import _ from 'lodash';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import {Card} from "../../components/Card/index"
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import {EMAIL_FIELD, EMAIL_FIELD_ERROR, PASSWORD_FIELD, PASSWORD_FIELD_ERROR} from "./constants";
import {SIGNUP_ROUTE} from '../../routes/constants';
import {schema} from './validations';

class LoginContainer extends React.PureComponent {
    state = {
        [EMAIL_FIELD]: '',
        [PASSWORD_FIELD]: '',
        [EMAIL_FIELD_ERROR]: '',
        [PASSWORD_FIELD_ERROR]: '',
    };

    handleChanged = event => {
        const {id, value} = event.target;
        this.setState({[id]: value});
    };

    handleSubmitClicked = event => {
        event.preventDefault();
        const {[EMAIL_FIELD]: email, [PASSWORD_FIELD]: password, ...restState} = this.state;

        const results = schema.validate({[EMAIL_FIELD]: email, [PASSWORD_FIELD]: password}, {abortEarly: false});

        if (results.error) {
            const errors = results.error.details.reduce((acc, cur) => {
                acc[cur.context.key] = cur.message;
                return acc;
            }, {});

            this.setState({
                [EMAIL_FIELD_ERROR]: errors[EMAIL_FIELD],
                [PASSWORD_FIELD_ERROR]: errors[PASSWORD_FIELD],
            });
            return;
        }

        this.setState({
            [EMAIL_FIELD_ERROR]: '',
            [PASSWORD_FIELD_ERROR]: '',
        });
        //TODO send request to the server
    };

    redirectToHome = () => {
        // props.updateTitle('Home')
        this.props.history.push('/todos');
    };


    render() {
        const {
            [EMAIL_FIELD]: email,
            [PASSWORD_FIELD]: password,
            [EMAIL_FIELD_ERROR]: email_error,
            [PASSWORD_FIELD_ERROR]: password_error
        } = this.state;
        return (
            <div className="login_container">
                <Card>
                    <h2 className="card-title text-center mb-4 mt-1">Login</h2>
                    <hr/>
                    <p className="text-success text-center">Some message error</p>
                    <form>
                        <div className="form-group">
                            <TextField
                                error={!_.isEmpty(email_error)}
                                helperText={email_error}
                                type="email"
                                id={EMAIL_FIELD}
                                label="Email"
                                required="required"
                                value={email}
                                onChange={this.handleChanged}/>
                        </div>
                        <div className="form-group">
                            <TextField
                                error={!_.isEmpty(password_error)}
                                helperText={password_error}
                                type="password"
                                id={PASSWORD_FIELD}
                                label="Password"
                                required="required"
                                value={password}
                                onChange={this.handleChanged}/>
                        </div>
                        <Button
                            type="submit"
                            onClick={this.handleSubmitClicked}>
                            Sign In
                        </Button>
                    </form>
                    <div className="text-center">
                        Don't have an account?
                        <Link to={SIGNUP_ROUTE}> Sign up</Link>
                    </div>
                </Card>
            </div>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);