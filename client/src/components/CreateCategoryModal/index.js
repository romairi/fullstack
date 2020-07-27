import React from "react";
import './index.scss';
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop/Backdrop";
import Fade from "@material-ui/core/Fade/Fade";
import TextField from "@material-ui/core/TextField/TextField";


function CreateCategoryModal({onAddCategoryClicked, isModalOpen, setModalOpen}) {
    const [categoryParam, setCategoryParams] = React.useState('');

    const onCategoryNameChange = (event) => {
        setCategoryParams(event.target.value);

    };

    const onAddButtonClicked = () => {
        onAddCategoryClicked && onAddCategoryClicked(categoryParam);
        setCategoryParams('');
    };

    const closeModal = () => setModalOpen(false);

    return (
            <Modal
                className="modal"
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={isModalOpen}
                onClose={() => setModalOpen(false)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={isModalOpen}>
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
                        <div className="footer_modal">
                            <Button
                                className="btn_close"
                                variant="contained"
                                size="large"
                                onClick={closeModal}>
                                Close
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
    );
}

export default CreateCategoryModal;
