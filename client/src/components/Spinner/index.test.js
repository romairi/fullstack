import React from 'react';
import renderer from 'react-test-renderer';
import SpinnerContainer from './index';
import {buildClassName} from "../../services/classNameService";

jest.mock('../../services/classNameService');
jest.mock('@material-ui/core/CircularProgress', () => () => <div className="CircularProgress" />);

describe('Spinner', () => {
    describe('render', () => {
       it('should render the children - isLoading is false', () => {
           const component = renderer.create(
               <SpinnerContainer isLoading={false}>
                   <div>CHILDREN</div>
               </SpinnerContainer>,
           );
           expect(component.toJSON()).toMatchSnapshot();
           expect(buildClassName.mock.calls.pop()).toMatchSnapshot();
       });
       it('should render the spinner - isLoading is true', () => {
           const component = renderer.create(
               <SpinnerContainer isLoading={true}>
                   <div>CHILDREN</div>
               </SpinnerContainer>,
           );
           expect(component.toJSON()).toMatchSnapshot();
           expect(buildClassName.mock.calls.pop()).toMatchSnapshot();
       });
    });
});
