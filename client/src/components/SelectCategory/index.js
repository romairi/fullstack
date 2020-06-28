import React from 'react';
import './index.scss';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Select from "@material-ui/core/Select/Select";


function SelectCategory() {
    return (
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
    );
}

export default SelectCategory;
