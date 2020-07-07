import React from "react";
import './index.scss';
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop/Backdrop";
import Fade from "@material-ui/core/Fade/Fade";
import Select from "@material-ui/core/Select/Select";


function SelectCategoryModal({categories, onSelectCategoryClicked, isModalOpen, setModalOpen}) {
    const [selectedCategoryId, setSelectedCategoryId] = React.useState(undefined);

    const categoriesOptions = categories.map(c => <option key={c._id} value={c._id}>{c.name}</option>);

    const onSelectButtonClicked = () => {
        onSelectCategoryClicked && onSelectCategoryClicked(selectedCategoryId);
    };

    const closeModal = () => setModalOpen(false);

    const onSelectedCategoryChange = event => setSelectedCategoryId(event.target.value);

    return (
        <div className="create_category_modal">
            <Modal
                className="modal"
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={isModalOpen}
                onClose={closeModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={isModalOpen}>
                    <div className="modal_box">
                        <h3 className="title_modal_box">Select category</h3>
                        <div className="add_category">
                            <Select
                                className="select_item"
                                native defaultValue=""
                                id="grouped-native-select"
                                value={selectedCategoryId}
                                onChange={onSelectedCategoryChange}
                            >
                                {categoriesOptions}
                            </Select>

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
                                onClick={onSelectButtonClicked}>
                                Add
                            </Button>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}

export default SelectCategoryModal;
