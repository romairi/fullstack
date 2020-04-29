import React from 'react';
import './index.scss';
import {connect} from "react-redux";

class SignUpContainer extends React.PureComponent {
    render() {
        return (
            <div className="sign-up-container">
                <div className="sign-up-form">
                    <form>
                        <div className="title_card"><h2>Sign up</h2></div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                name="username"
                                placeholder="UserName"
                                required="required"/>
                        </div>
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
                            <input
                                type="password"
                                className="form-control"
                                name="confirm_password"
                                placeholder="Confirm Password"
                                required="required"/>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-lg">
                                Sign Up
                            </button>
                        </div>
                    </form>
                    <div className="text-center">
                        Already have an account?
                        <a href="#">Login here</a>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);