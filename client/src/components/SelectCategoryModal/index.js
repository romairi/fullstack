import React from "react";
import './index.scss';
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop/Backdrop";
import Fade from "@material-ui/core/Fade/Fade";
import Select from "@material-ui/core/Select/Select";


function SelectCategoryModal({categories, onSelectCategoryClicked, isModalOpen, setModalOpen}) {
    let [selectedCategoryId, setSelectedCategoryId] = React.useState(undefined);

    const categoriesOptions = categories.map(c => <option key={c._id} value={c._id}>{c.name}</option>);

    const onSelectButtonClicked = () => {
        if (selectedCategoryId === undefined) {
            const defaultCategory = categories.map(item => item._id);
            selectedCategoryId = defaultCategory[0];
        }
        onSelectCategoryClicked && onSelectCategoryClicked(selectedCategoryId);
    };

    const closeModal = () => setModalOpen(false);

    const onSelectedCategoryChange = event => setSelectedCategoryId(event.target.value);

    return (
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
                    <h3 className="title_modal_box"><strong>Select Category</strong></h3>
                    <div className="select_category">
                        <Select
                            className="select_item"
                            native
                            defaultValue=""
                            id="grouped-native-select"
                            value={selectedCategoryId}
                            onChange={onSelectedCategoryChange}
                        >
                            {categoriesOptions}
                        </Select>

                    </div>
                    <div className="footer_selected_modal">
                        <Button
                            className="btn_close"
                            variant="contained"
                            size="large"
                            onClick={closeModal}>
                            Close
                        </Button>
                        <Button
                            className="btn_selected"
                            variant="contained"
                            size="large"
                            onClick={onSelectButtonClicked}>
                            Save
                        </Button>
                    </div>
                </div>
            </Fade>
        </Modal>
    );
}

export default SelectCategoryModal;
