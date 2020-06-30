import React from 'react';
import './index.scss';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


function AddCategory() {
    const [categoryParam, setCategoryParams] = React.useState('');

    const onTitleChange = (event) => {
        setCategoryParams(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        // Todo
        setCategoryParams('');
    };

    return (
        <div className="add_category">
            <form className="form_items"
                  onSubmit={onSubmit}>
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
                    type="submit">
                    add
                </Button>
            </form>
        </div>
    );
}

export default AddCategory;
