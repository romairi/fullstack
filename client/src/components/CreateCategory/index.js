import React from "react";
import './index.scss';
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop/Backdrop";
import Fade from "@material-ui/core/Fade/Fade";
import TextField from "@material-ui/core/TextField/TextField";


function CreateCategory({onAddCategoryClicked, categoryParam, onTitleChange}) {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onAddButtonClicked = (event) => {
        onAddCategoryClicked && onAddCategoryClicked(event.target.value);
    };

    return (
        <div className="create_category">
            <Button
                className="btn_topic"
                variant="contained"
                type="button"
                onClick={handleOpen}
            >
                Create Category
            </Button>
            <Modal
                className="modal"
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className="modal_box">
                        <h3 className="title_modal_box">Add new category</h3>
                        <div className="add_category">
                            <TextField
                                className="category_textField"
                                type="text"
                                label="Name category"
                                onChange={onTitleChange}
                                value={categoryParam}
                                variant="outlined"
                            />

                        </div>
                        <div className="buttons">
                            <Button
                                className="btn_cancel"
                                variant="contained"
                                size="large"
                                onClick={handleClose}>
                                Cancel
                            </Button>
                            <Button
                                className="btn_add"
                                variant="contained"
                                size="large"
                                onClick={onAddButtonClicked}>
                                Add
                            </Button>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}

export default CreateCategory;
