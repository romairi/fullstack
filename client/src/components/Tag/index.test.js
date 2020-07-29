import React from 'react';
import renderer from 'react-test-renderer';
import Tag from './index';

describe('Tag', () => {
    describe('render', () => {
        it('should render the component - without children', () => {
            const onDeleteClicked = jest.fn();
            const component = renderer.create(
                <Tag id='SOME_ID' onDeleteClicked={onDeleteClicked} />,
            );
            expect(component.toJSON()).toMatchSnapshot();
        });
        it('should render the component - with children', () => {
            const onDeleteClicked = jest.fn();
            const component = renderer.create(
                <Tag id='SOME_ID' onDeleteClicked={onDeleteClicked} ><div>CHILDREN</div></Tag>,
            );
            expect(component.toJSON()).toMatchSnapshot();
        });
    });
    describe('onClick', () => {
        const id = 'SOME_ID';
        const onDeleteClicked = jest.fn();
        const component = renderer.create(
            <Tag id={id} onDeleteClicked={onDeleteClicked} />,
        );
        const spanElement = component.root.findByType('span');
        spanElement.props.onClick();
        expect(onDeleteClicked).toHaveBeenCalledWith(id);
    });
});
