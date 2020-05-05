import React from 'react';
import './index.scss';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';


class SignUpContainer extends React.PureComponent {

    state = {
        userName: '',
        email: '',
        password: '',
        confirmPassword: ''
    };


    handleChanged = (e) => {
        const {id, value} = e.target;
        this.setState(() => ({
            [id]: value
        }))
    };


    handleSubmitClicked = (e) => {
        e.preventDefault();
        if (this.state.password === this.state.confirmPassword) {
            console.log('Passwords is match');
            // sendDataToServer()
        } else {
            console.log('Passwords do not match');
        }
    };

    render() {
        return (
            <div className="sign-up-container">
                <div className="title_card"><h2>Sign Up</h2></div>
                <div className="sign-up-form">
                    <form>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                name="username"
                                id="userName"
                                placeholder="UserName"
                                required="required"
                                value={this.state.userName}
                                onChange={this.handleChanged}/>
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Email"
                                required="required"
                                value={this.state.email}
                                onChange={this.handleChanged}/>
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                id="password"
                                placeholder="Password"
                                required="required"
                                value={this.state.password}
                                onChange={this.handleChanged}/>
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                name="confirm_password"
                                id="confirmPassword"
                                placeholder="Confirm Password"
                                required="required"
                                value={this.state.confirmPassword}
                                onChange={this.handleChanged}/>
                        </div>
                        <div className="form-group">
                            <button
                                type="submit"
                                className="btn btn-primary btn-lg"
                                onClick={this.handleSubmitClicked}>
                                Sign Up
                            </button>
                        </div>
                    </form>
                    <div className="text-center">
                        Already have an account?
                        <Link to="/login"> Login here</Link>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);