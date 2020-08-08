import React from 'react';
import './index.scss';
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';


function MySearchesBox({searches}) {

    const onDeleteButtonClicked = () => {

    };

    return (
        <div className="my_searches_box">
            <div>
                <Card className="my_searches_card">
                    <h3 className="my_searches_title"><strong>My Last Searches</strong></h3>
                    <div className="my_searches_filter_lists">
                        <div className="my_search_list_include">
                            <h3 className="title_include_list"><strong>Include List</strong></h3>
                            <List className="list_include">
                                {[0, 1, 2, 3, 4].map((sectionId) => (
                                    <li key={`section-${sectionId}`} className="">
                                        <ul className="my_search_list_ul">
                                            {[0, 1, 2].map((item) => (
                                                <ListItem key={`item-${sectionId}-${item}`}>
                                                    <ListItemText primary={`Item ${item}`}/>
                                                </ListItem>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </List>
                        </div>
                        <div className="my_search_list_exclude">
                            <h3 className="title_exclude_list"><strong>Exclude List</strong></h3>
                            <List className="list_exclude" subheader={<li/>}>
                                {[0, 1, 2, 3, 4].map((sectionId) => (
                                    <li key={`section-${sectionId}`} className="">
                                        <ul className="my_search_list_ul">
                                            {[0, 1, 2].map((item) => (
                                                <ListItem key={`item-${sectionId}-${item}`}>
                                                    <ListItemText primary={`Item ${item}`}/>
                                                </ListItem>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </List>
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
