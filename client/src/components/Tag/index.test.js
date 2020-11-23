import React from 'react';
import renderer from 'react-test-renderer';
import Tag from './index';
import Chip from "@material-ui/core/Chip";

const id = 'SOME_ID';
let onDeleteClicked = jest.fn();

describe('Tag', () => {
    beforeEach(() => {
        onDeleteClicked.mockClear();
    });

    describe('render', () => {
        it('should render the component - without children', () => {
            const component = renderer.create(
                <Tag id={id} onDeleteClicked={onDeleteClicked} />,
            );
            expect(component.toJSON()).toMatchSnapshot();
        });
        it('should render the component - with children', () => {
            const component = renderer.create(
                <Tag id={id} onDeleteClicked={onDeleteClicked} ><div>CHILDREN</div></Tag>,
            );
            expect(component.toJSON()).toMatchSnapshot();
        });
    });
    describe('onClick', () => {
        const component = renderer.create(
            <Tag id={id} onDeleteClicked={onDeleteClicked} />,
        );
        const chipElement = component.root.findByType(Chip);
        chipElement.props.onDelete();
        expect(onDeleteClicked).toHaveBeenCalledWith(id);
    });
});
