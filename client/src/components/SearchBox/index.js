import React from 'react';
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button";
import {Card} from "@material-ui/core";
import Tag from "../Tag";
import './index.scss';

function SearchBox(props) {
    const [searchParam, setSearchParam] = React.useState('');
    const [searchIncTags, setSearchIncTags] = React.useState([]);
    const [searchExcTags, setSearchExcTags] = React.useState([]);

    const onSearchFieldChange = event => {
        setSearchParam(event.target.value);
    };

    const onIncludeButtonClicked = () => {
        setSearchIncTags([...searchIncTags, searchParam]);
        setSearchParam('');

    };

    const onExcludeButtonClicked = () => {
        setSearchExcTags([...searchExcTags, searchParam]);
        setSearchParam('');
    };

    const onDeleteTag = (tagId) => {
        setSearchIncTags(searchIncTags.filter((tag, idx) => idx !== tagId));
    };

    const onDeleteTagExc = (tagId) => {
        setSearchExcTags(searchExcTags.filter((tag, idx) => idx !== tagId));
    };


    const includeTagsElements =
        searchIncTags.map((tag, idx) =>
            <Tag key={idx} id={idx} onDeleteClicked={onDeleteTag}>{tag}</Tag>);

    const excludeTagsElements =
        searchExcTags.map((tag, idx) =>
            <Tag key={idx} id={idx} onDeleteClicked={onDeleteTagExc}>{tag}</Tag>);


    return (
        <div className="search_box_container">
            <Card className="search_box_card">
                <h3 className="search_box_title">Search for a article</h3>
                <div className="search_box">
                    <TextField
                        type="text"
                        label="search article"
                        onChange={onSearchFieldChange}
                        value={searchParam}
                    />
                    <Button
                        variant="contained"
                        size="medium"
                        color="primary"
                        onClick={onIncludeButtonClicked}
                    >
                        include
                    </Button>
                    <Button
                        variant="contained"
                        size="medium"
                        color="primary"
                        type="submit"
                        onClick={onExcludeButtonClicked}>
                        exclude
                    </Button>
                </div>
                <div className="search_box_result">
                    <h4 className="title_tag">
                        <strong>Include tags:</strong>
                    </h4>
                    {includeTagsElements}
                    <h4 className="title_tag">
                        <strong>Exclude tags:</strong>
                    </h4>
                    {excludeTagsElements}
                </div>

                <div className="search_box_submit">
                    <Button
                        variant="contained"
                        size="medium"
                        color="primary"
                        type="submit">
                        Search
                    </Button>
                    <Button
                        variant="contained"
                        size="medium"
                        color="secondary"
                        type="submit">
                        Clear
                    </Button>
                </div>
            </Card>
        </div>
    )
}

export default SearchBox;
