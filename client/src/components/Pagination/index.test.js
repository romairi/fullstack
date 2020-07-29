import React from 'react';
import renderer from 'react-test-renderer';
import Pagination from './index';
import {buildClassName} from "../../services/classNameService";

jest.mock('../../services/classNameService');
jest.mock('@material-ui/core/Button', () => () => <div className='Button'/>);
jest.mock('@material-ui/icons/ChevronLeft', () => () => <div className='ChevronLeft'/>);
jest.mock('@material-ui/icons/ChevronRight', () => () => <div className='ChevronRight'/>);

describe('Pagination', () => {
    describe('render', () => {
        it('should render the component', () => {
            const component = renderer.create(
                <Pagination page={0} isLastPage={10} onChangePage={0}/>
            );

            expect(component.toJSON()).toMatchSnapshot();
            expect(buildClassName.mock.calls.pop()).toMatchSnapshot();
        });
    });
});
