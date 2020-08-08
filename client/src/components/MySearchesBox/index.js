import React from 'react';
import './index.scss';
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import DeleteIcon from '@material-ui/icons/Delete';
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";


function MySearchesBox({searches}) {

    const onDeleteButtonClicked = () => {

    };

    const [chipData, setChipData] = React.useState([
        {key: 0, label: 'Angular'},
        {key: 1, label: 'jQuery'},
        {key: 2, label: 'Polymer'},
        {key: 3, label: 'Vue.js'},
        {key: 4, label: 'Vue.js'},
        {key: 5, label: 'Vue.js'},
        {key: 6, label: 'Vue.js'},
        {key: 7, label: 'Vue.js'},
    ]);

    const handleDelete = (chipToDelete) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };


    return (
        <div className="my_searches_box">
            <div>
                <Card className="my_searches_card">
                    <h3 className="my_searches_title"><strong>My Last Searches</strong></h3>
                    <div className="my_searches_filter_lists">
                        <div className="my_search_list_include">
                            <h3 className="title_include_list"><strong>Include List</strong></h3>
                            <Paper component="ul" className="my_search_list_ul">
                                {chipData.map((data) => {
                                    return (
                                        <li key={data.key}>
                                            <Chip
                                                label={data.label}
                                                onDelete={handleDelete(data)}
                                                className="my_search_chip"
                                            />
                                        </li>
                                    );
                                })}
                            </Paper>
                        </div>
                        <div className="my_search_list_exclude">
                            <h3 className="title_exclude_list"><strong>Exclude List</strong></h3>
                            <Paper component="ul" className="my_search_list_ul">
                                {chipData.map((data) => {
                                    return (
                                        <li key={data.key}>
                                            <Chip
                                                label={data.label}
                                                onDelete={handleDelete(data)}
                                                className="my_search_chip"
                                            />
                                        </li>
                                    );
                                })}
                            </Paper>
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

        </div>
    )
}

export default MySearchesBox;
