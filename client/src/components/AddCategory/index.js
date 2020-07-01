import React from 'react';
import './index.scss';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


function AddCategory({onAddCategoryClicked}) {
    const [categoryParam, setCategoryParams] = React.useState('');

    const onTitleChange = (event) => {
        setCategoryParams(event.target.value);
    };

    const onAddButtonClicked = (event) => {
        onAddCategoryClicked && onAddCategoryClicked(event.target.value);
    };

    return (
        <div className="add_category">
            <TextField
                className="category_textField"
                type="text"
                label="new Category"
                onChange={onTitleChange}
                value={categoryParam}
                variant="outlined"
            />
            <Button
                className="btn_add"
                variant="contained"
                size="medium"
                onClick={onAddButtonClicked}>
                add
            </Button>
        </div>
    );
}

export default AddCategory;
