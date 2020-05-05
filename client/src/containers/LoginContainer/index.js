import React from 'react';
import './index.scss';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import {Card} from "../../components/Card/index"
import Button from "../../components/Button";
import TextField from "../../components/TextField";

class LoginContainer extends React.PureComponent {

    state = {
        email: '',
        password: ''
    };

    handleChanged = (e) => {
        const {id, value} = e.target;
        this.setState(() => ({
            [id]: value
        }))
    };


    handleSubmitClicked = (e) => {
        e.preventDefault();
        debugger
        console.log('Redirect');
        this.redirectToHome()


    };

    redirectToHome = () => {
        // props.updateTitle('Home')
        this.props.history.push('/todos');
    }

    // render() {
    //     return (
    //         <div className="sign-up-container">
    //             <div className="title_card"><h2>Login</h2></div>
    //             <div className="sign-up-form">
    //                 <form>
    //                     <div className="form-group">
    //                         <TextField
    //                             type="email"
    //                             className="form-control"
    //                             name="email"
    //                             placeholder="Email"
    //                             required="required"
    //                             value={this.state.email}
    //                             onChange={this.handleChanged}/>
    //                     </div>
    //                     <div className="form-group">
    //                         <TextField
    //                             type="password"
    //                             className="form-control"
    //                             name="password"
    //                             placeholder="Password"
    //                             required="required"
    //                             value={this.state.password}
    //                             onChange={this.handleChanged}/>
    //                     </div>
    //                     <div className="form-group">
    //                         <button
    //                             type="submit"
    //                             className="btn btn-primary btn-lg"
    //                             onClick={this.handleSubmitClicked}>
    //                             Sign In
    //                         </button>
    //                     </div>
    //                 </form>
    //                 <div className="text-center">
    //                     Don't have an account?
    //                     <Link to="/signup"> Sign up</Link>
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // }

    render() {
        return (
            //
            //             // <div className="login col-lg-4">
            //             //     <div className="card">
            //             //         <article className="card-body">
            //             //             <h4 className="card-title text-center mb-4 mt-1">Login</h4>
            //             //             <hr/>
            //             //             <p className="text-success text-center">Some message error</p>
            //             //             <form>
            //             //                 <div className="form-group">
            //             //                     <TextField
            //             //                         type="email"
            //             //                         className="form-control"
            //             //                         name="email"
            //             //                         id="email"
            //             //                         placeholder="Email"
            //             //                         required="required"
            //             //                         value={this.state.email}
            //             //                         onChange={this.handleChanged}/>
            //             //                 </div>
            //             //                 <div className="form-group">
            //             //                     <TextField
            //             //                         type="password"
            //             //                         className="form-control"
            //             //                         name="password"
            //             //                         id="password"
            //             //                         placeholder="Password"
            //             //                         required="required"
            //             //                         value={this.state.password}
            //             //                         onChange={this.handleChanged}/>
            //             //                 </div>
            //             //                 <div className="form-group">
            //             //                     <button
            //             //                         type="submit"
            //             //                         className="btn btn-primary btn-lg"
            //             //                         onClick={this.handleSubmitClicked}>
            //             //                         Sign In
            //             //                     </button>
            //             //                 </div>
            //             //             </form>
            //             //             <div className="text-center">
            //             //                 Don't have an account?
            //             //                 <Link to="/signup"> Sign up</Link>
            //             //             </div>
            //             //         </article>
            //             //     </div>
            //             // </div>

                <div>
                    <h4 className="card-title text-center mb-4 mt-1">Login</h4>
                    <hr/>
                    <p className="text-success text-center">Some message error</p>
                    <form>
                        <TextField type="text" label="email" />
                        <div className="form-group">
                            <TextField
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
                            <TextField
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
                            <Button
                                type="submit"
                                onClick={this.handleSubmitClicked}>
                                Sign In
                            </Button>
                        </div>
                    </form>
                    <div className="text-center">
                        Don't have an account?
                        <Link to="/signup"> Sign up</Link>
                    </div>
                </div>

        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);