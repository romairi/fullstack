import React from 'react';
import renderer from 'react-test-renderer';
import PaperItem, {ActionButton} from './index';
import {buildClassName} from "../../services/classNameService";

jest.mock('../../services/classNameService');
// jest.mock('@material-ui/core/Card', () => () => <div className="Card"/>);
jest.mock('@material-ui/core/Button', () => () => <div className="Button"/>);
jest.mock('@material-ui/icons/Save', () => () => <div className="SaveIcon"/>);
jest.mock('@material-ui/icons/Delete', () => () => <div className="DeleteIcon"/>);

describe('PaperItem', () => {
    describe('render', () => {
        it('should render the props', () => {
            const component = renderer.create(
                <PaperItem/>
            );
            expect(component.toJSON()).toMatchSnapshot();
            expect(buildClassName.mock.calls.pop()).toMatchSnapshot();
        });
    });

    describe('ActionButton', () => {
        describe('render', () => {
            it('should render the children', () => {

                const component = renderer.create(
                    <ActionButton>
                        <div>CHILDREN</div>
                    </ActionButton>
                );

                expect(component.toJSON()).toMatchSnapshot();
            });
        })
    })
});

