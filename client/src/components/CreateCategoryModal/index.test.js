import React from 'react';
import renderer from 'react-test-renderer';
import CreateCategoryModal from './index';


jest.mock('@material-ui/core/Button', () => () => <div className='Button'/>);
jest.mock('@material-ui/core/Modal', () => () => <div className='Modal'/>);
jest.mock('@material-ui/core/Backdrop/Backdrop', () => () => <div className='Backdrop'/>);
jest.mock('@material-ui/core/Fade/Fade', () => () => <div className='Fade'/>);
jest.mock('@material-ui/core/TextField/TextField', () => () => <div className='TextField'/>);

describe('CreateCategoryModal', () => {
    describe('render', () => {
        it('should render the component - with open modal', () => {
            const component = renderer.create(
                <CreateCategoryModal/>
            );
            expect(component.toJSON()).toMatchSnapshot();
        });
    });

});
