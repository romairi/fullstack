import React from "react";
import './index.scss';
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button";
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from "@material-ui/core/InputAdornment";
import LockIcon from "@material-ui/core/SvgIcon/SvgIcon";

function SearchMyPaper({onSearchButton}) {

    const [searchParam, setSearchParam] = React.useState('');
    const [searchPaper, setSearchPaper] = React.useState([]);

    const onSearchFieldChange = event => {
        setSearchParam(event.target.value);
    };

    const onSubmit = (event) => {
        debugger
        event.preventDefault();
        onSearchButton(searchParam);
        setSearchParam('');
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
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon/>
                            </InputAdornment>
                        ),
                    }}

                />
                {/*<Button*/}
                {/*    className="search_btn"*/}
                {/*    variant="contained"*/}
                {/*    size="medium"*/}
                {/*    color="primary"*/}
                {/*    type="submit"*/}
                {/*    startIcon={<SearchIcon/>}*/}
                {/*>Search*/}
                {/*</Button>*/}
            </form>
        </div>
    )
}

export default SearchMyPaper;
