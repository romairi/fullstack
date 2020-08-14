import React from 'react';
import './index.scss';
import SearchItem from "../../components/SearchItem";
import {useSelector} from "react-redux";


function MySearchesContainer() {
    debugger

    const searches = useSelector(state => state.user.searches);
    // const [currentSearchIncTags, setCurrentSearchIncTags] = React.useState(searches[searches.length - 1].include_tags);
    // const [currentSearchExcTags, setCurrentSearchExcTags] = React.useState(searches[searches.length - 1].exclude_tags);

    const searchElements = searches.map(item => {
            return <SearchItem
                id={item._id}
                key={item._id}
                incTagsList={item.include_tags}
                excTagsList={item.exclude_tags}/>
        }
    );

    return (
        <div className="searches_container">
            {searchElements}
        </div>
    )
}

export default MySearchesContainer;
