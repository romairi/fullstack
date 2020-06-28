import React from "react";
import './index.scss';
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button";
import SearchIcon from '@material-ui/icons/Search';

function SearchMyPaper() {

    const [searchParam, setSearchParam] = React.useState('');
    const [searchPaper, setSearchPaper] = React.useState([]);

    const onSearchFieldChange = event => {
        setSearchParam(event.target.value);
    };

    const onSubmit = () => {

    };

    return (
        <div className="search_my_paper">
            <form className="form-items"
                  onSubmit={onSubmit}>
                <TextField
                    className="search_textField"
                    variant="outlined"
                    type="text"
                    label="search article"
                    onChange={onSearchFieldChange}
                    value={searchParam}
                />
                <Button
                    className="search_btn"
                    variant="contained"
                    size="medium"
                    color="primary"
                    type="submit"
                    startIcon={<SearchIcon/>}>
                </Button>
            </form>
        </div>
    )
}

export default SearchMyPaper;
