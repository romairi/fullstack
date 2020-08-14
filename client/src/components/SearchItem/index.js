import React from 'react';
import './index.scss';
import Card from "@material-ui/core/Card/Card";
import Button from "@material-ui/core/Button";
import DeleteIcon from '@material-ui/icons/Delete';
import Chip from "@material-ui/core/Chip";


function FilterSearchTags({searchList}) {
    if (searchList !== undefined) {
        return (
            <>
                {searchList.map((tag, idx) => <Chip className="chip_item" key={idx} label={tag}/>)}
            </>
        );
    }
    return [];

}


function SearchItem(props) {

    const {
        id,
        incTagsList,
        excTagsList
    } = props;

    debugger

    const onDeleteButtonClicked = () => {

    };

    return (
        <div className="search_item_container">
            <Card className="my_searches_card">
                <h3 className="my_searches_title"><strong>My Last Searches</strong></h3>
                <div className="my_searches_filter_lists">
                    <h3 className="my_last_search_title"><strong>Search Name: {id} </strong></h3>
                    <div className="search_list">
                        <div className="chip_items">
                            <h4 className="title_list">
                                <strong>Include tags:</strong>
                            </h4>
                            <FilterSearchTags searchList={incTagsList}/>
                        </div>
                        <div className="chip_items">
                            <h4 className="title_list">
                                <strong>Exclude tags:</strong>
                            </h4>
                            <FilterSearchTags searchList={excTagsList}/>
                        </div>
                    </div>
                </div>
                <div className="card_footer">
                    <Button className="search_box_submit_btn"
                            variant="contained"
                            size="medium"
                            color="secondary"
                            startIcon={<DeleteIcon/>}
                            onClick={onDeleteButtonClicked}>
                        Delete Search
                    </Button>
                </div>
            </Card>
        </div>
    )

}

export default SearchItem;
