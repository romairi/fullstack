import React from 'react';
import './index.scss';
import {connect} from "react-redux";

class SignupContainer extends React.PureComponent {
    render() {
        return (
            <div className="signup-container">
                SIGNUP
            </div>
        );
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);