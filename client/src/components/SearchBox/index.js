import React from 'react';
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button";
import {Card} from "@material-ui/core";
import Tag from "../Tag";
import './index.scss';

function SearchBox(props) {
    const [searchParam, setSearchParam] = React.useState('');
    const [searchPapers, setSearchPapers] = React.useState([]);

    const onSearchFieldChange = event => {
        setSearchParam(event.target.value);
    };

    const onIncludeButtonClicked = () => {
        setSearchPapers([...searchPapers, searchParam]);
        setSearchParam('');

    };

    const onDeleteTag = (paperId) => {
        setSearchPapers(searchPapers.filter((paper, idx) => idx !== paperId));
    };

    const includePapersElements =
        searchPapers.map((paper, idx) =>
            <Tag key={idx} id={idx} onDeleteClicked={onDeleteTag}>{paper}</Tag>);

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
                        type="submit">
                        exclude
                    </Button>
                </div>
                <div className="search_box_result">
                    <h4>Include tags:</h4>
                    {includePapersElements}
                </div>
            </Card>
        </div>
    )
}

export default SearchBox;
