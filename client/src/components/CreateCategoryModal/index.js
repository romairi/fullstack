import React from "react";
import './index.scss';
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop/Backdrop";
import Fade from "@material-ui/core/Fade/Fade";
import TextField from "@material-ui/core/TextField/TextField";


function CreateCategoryModal({onAddCategoryClicked, isCreateCategoryModalOpen, setCreateCategoryModalOpen}) {
    const [categoryParam, setCategoryParams] = React.useState('');

    const onCategoryNameChange = (event) => {
        setCategoryParams(event.target.value);
    };

    const onAddButtonClicked = () => {
        onAddCategoryClicked && onAddCategoryClicked(categoryParam);
    };

    const closeModal = () => setCreateCategoryModalOpen(false);

    return (
        <div className="create_category_modal">
            <Modal
                className="modal"
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={isCreateCategoryModalOpen}
                onClose={() => setCreateCategoryModalOpen(false)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={isCreateCategoryModalOpen}>
                    <div className="modal_box">
                        <h3 className="title_modal_box">Add new category</h3>
                        <div className="add_category">
                            <TextField
                                className="category_textField"
                                type="text"
                                label="Name category"
                                onChange={onCategoryNameChange}
                                value={categoryParam}
                                variant="outlined"
                            />

                        </div>
                        <div className="buttons">
                            <Button
                                className="btn_cancel"
                                variant="contained"
                                size="large"
                                onClick={closeModal}>
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

export default CreateCategoryModal;
