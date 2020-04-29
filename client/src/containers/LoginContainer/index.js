import React from 'react';
import './index.scss';
import {connect} from "react-redux";
import { Link } from 'react-router-dom';

class LoginContainer extends React.PureComponent {
    render() {
        return (
            <div className="sign-up-container">
                <div className="title_card"><h2>Login</h2></div>
                <div className="sign-up-form">
                    <form>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                placeholder="Email"
                                required="required"/>
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                placeholder="Password"
                                required="required"/>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-lg">
                                Sign In
                            </button>
                        </div>
                    </form>
                    <div className="text-center">
                        Don't have an account?
                        <Link to="/signup"> Sign up</Link>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);