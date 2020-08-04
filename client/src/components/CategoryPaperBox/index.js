import React from 'react';
import './index.scss';
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from '@material-ui/icons/Search';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Select from "@material-ui/core/Select/Select";
import Button from "@material-ui/core/Button";
import CreateCategoryModal from "../CreateCategoryModal";

function CategoryPaperBox({
                              categories,
                              selectedCategoryId,
                              setSelectedCategoryId,
                              isModalOpen,
                              setModalOpen,
                              onSearchChange,
                              searchParam,
                              onAddCategoryClicked,
                              onRemoveCategoryClicked
                          }) {

    const categoriesOptions = categories.map(c => <option key={c._id} value={c._id}>{c.name}</option>);
    const onSelectedCategoryChange = event => setSelectedCategoryId(event.target.value);

    return (
        <div className="category_paper_box">
            <Card className="category_paper_card">
                <h3 className="category_paper_title">Category Paper</h3>
                <div className="category_items">
                    <div className="search_my_paper">
                        <TextField
                            className="search_textField"
                            variant="outlined"
                            type="text"
                            label="search article"
                            onChange={onSearchChange}
                            value={searchParam}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon className="search_icon"/>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </div>
                    <div className="select_category">
                        <FormControl>
                            <InputLabel
                                className="category_input_label"
                                htmlFor="grouped-native-select"
                            >Choose Category
                            </InputLabel>
                            <Select
                                className="select_item"
                                native defaultValue=""
                                id="grouped-native-select"
                                value={selectedCategoryId}
                                onChange={onSelectedCategoryChange}
                            >
                                {categoriesOptions}
                            </Select>
                        </FormControl>
                        <Button
                            className="remove_category"
                            variant="contained"
                            onClick={onRemoveCategoryClicked}>
                            Remove Category
                        </Button>
                    </div>
                    <div className="category_item_footer">
                        <Button
                            className="btn_topic"
                            variant="contained"
                            type="button"
                            onClick={() => setModalOpen(true)}
                        >
                            Create Category
                        </Button>
                        <CreateCategoryModal
                            onAddCategoryClicked={onAddCategoryClicked}
                            isModalOpen={isModalOpen}
                            setModalOpen={setModalOpen}
                        />
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default CategoryPaperBox;
