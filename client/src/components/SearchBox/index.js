import React from 'react';
import './index.scss';
import _ from 'lodash';
import Tag from "../Tag";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button";
import {Card} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';


function SearchTags({searchList, onDeleteTag}) {
    return (
        <>
            {searchList.map((tag, idx) => <Tag key={idx} id={idx} onDeleteClicked={onDeleteTag}>{tag}</Tag>)}
        </>
    );
}

function SearchBox({onSearchButtonClicked}) {
    const [searchParam, setSearchParam] = React.useState('');
    const [searchIncTags, setSearchIncTags] = React.useState([]);
    const [searchExcTags, setSearchExcTags] = React.useState([]);
    const [checked, setChecked] = React.useState(false);


    const handleCheckBox = (event) => {
        setChecked(event.target.checked);
    };


    const onSearchFieldChange = event => {
        setSearchParam(event.target.value);
    };

    const onAddButtonClicked = (cb, tags) => {
        if (!_.isEmpty(searchParam)) {
            cb([...tags, searchParam]);
            setSearchParam('');
        }
    };

    const onIncludeButtonClicked = _.partial(onAddButtonClicked, setSearchIncTags, searchIncTags);
    const onExcludeButtonClicked = _.partial(onAddButtonClicked, setSearchExcTags, searchExcTags);

    const onDeleteTagClicked = (cb, list, tagId) => {
        cb(list.filter((tag, idx) => idx !== tagId));
    };

    const onDeleteIncTagClicked = _.partial(onDeleteTagClicked, setSearchIncTags, searchIncTags);
    const onDeleteExcTagClicked = _.partial(onDeleteTagClicked, setSearchExcTags, searchExcTags);

    const onClearButtonClicked = () => {
        setSearchIncTags([]);
        setSearchExcTags([]);
        setSearchParam('');
    };

    return (
        <div className="search_box_container">
            <Card className="search_box_card">
                <h3 className="search_box_title">Search Bar</h3>
                <div className="search_box">
                    <TextField className="search_box_textField"
                               type="text"
                               label="search article"
                               onChange={onSearchFieldChange}
                               value={searchParam}
                    />
                    <div className="search_box_buttons">
                        <Button
                            className="search_box_btn"
                            variant="contained"
                            size="medium"
                            color="primary"
                            onClick={onIncludeButtonClicked}
                        >
                            include
                        </Button>
                        <Button
                            className="search_box_btn"
                            variant="contained"
                            size="medium"
                            color="primary"
                            type="submit"
                            onClick={onExcludeButtonClicked}>
                            exclude
                        </Button>
                    </div>

                    <div className="search_check_box">
                        <h4 className="title_check_box"><strong>To save your search, please click here</strong></h4>
                        <Checkbox
                            className="check_box"
                            checked={checked}
                            onChange={handleCheckBox}
                            inputProps={{'aria-label': 'primary checkbox'}}
                        />
                    </div>
                </div>
                <div className="search_box_result">
                    <h4 className="title_tag">
                        <strong>Include tags:</strong>
                    </h4>
                    <SearchTags searchList={searchIncTags} onDeleteTag={onDeleteIncTagClicked}/>
                    <h4 className="title_tag">
                        <strong>Exclude tags:</strong>
                    </h4>
                    <SearchTags searchList={searchExcTags} onDeleteTag={onDeleteExcTagClicked}/>
                </div>

                <div className="search_box_submit">
                    <Button
                        className="search_box_submit_btn"
                        variant="contained"
                        size="medium"
                        color="primary"
                        type="submit"
                        onClick={() => onSearchButtonClicked(searchIncTags, searchExcTags, checked)}>
                        Search
                    </Button>
                    <Button
                        className="search_box_submit_btn"
                        variant="contained"
                        size="medium"
                        color="secondary"
                        type="submit"
                        startIcon={<DeleteIcon/>}
                        onClick={onClearButtonClicked}>
                        Clear
                    </Button>
                </div>
            </Card>
        </div>
    )
}

export default SearchBox;
