import React from 'react';
import './index.scss';
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from '@material-ui/icons/Search';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Select from "@material-ui/core/Select/Select";
import CreateCategory from "../CreateCategory";


function CategoryPaperBox({onSearchChange, searchParam, onAddCategoryClicked}) {

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
                            >Category
                            </InputLabel>
                            <Select
                                className="select_item"
                                native defaultValue=""
                                id="grouped-native-select"
                            >
                                <option hidden="hidden" aria-label="None" value=""/>
                                <option value={1}>Option 1</option>
                                <option value={2}>Option 2</option>
                                <option value={3}>Option 3</option>
                                <option value={4}>Option 4</option>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="category_item_footer">
                        <CreateCategory onAddCategoryClicked={onAddCategoryClicked}/>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default CategoryPaperBox;
