import React from 'react';
import renderer from 'react-test-renderer';
import LoginContainer from "./index";
import {Provider} from "react-redux";
import store from '../../redux/store';
import {BrowserRouter} from "react-router-dom";

// jest.mock('@material-ui/core/Card', () => () => <div className="Card"></div>);
jest.mock('@material-ui/core/Button', () => () => <div className="Button"/>);
jest.mock('@material-ui/core/TextField', () => () => <div className="TextField"/>);
jest.mock('@material-ui/icons/Lock', () => () => <div className="LockIcon"/>);
jest.mock('@material-ui/icons/Email', () => () => <div className="EmailIcon"/>);

describe('Login', () => {
    describe('render', () => {
        it('should render a component', () => {
            const component = renderer.create(
                <Provider store={store}>
                    <BrowserRouter>
                        <LoginContainer/>
                    </BrowserRouter>
                </Provider>
            );
            expect(component.toJSON()).toMatchSnapshot();
        });
    });
    describe('onSubmit', () => {

    });
});
