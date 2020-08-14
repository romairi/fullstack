import React from 'react';
import './index.scss';
import SearchItem from "../../components/SearchItem";
import {useSelector} from "react-redux";



function MySearchesContainer() {
    debugger

    const searches = useSelector(state => state.user.searches);

    const onDeleteButtonClicked = (idSearch) => {
        debugger
        console.log(idSearch)
    };


    const searchElements = searches.map(item => {
            return <SearchItem
                id={item._id}
                key={item._id}
                incTagsList={item.include_tags}
                excTagsList={item.exclude_tags}
                onDeleteButtonClicked={onDeleteButtonClicked}/>
        }
    );

    return (
        <div className="searches_container">
            {searchElements}
        </div>
    )
}

export default MySearchesContainer;
