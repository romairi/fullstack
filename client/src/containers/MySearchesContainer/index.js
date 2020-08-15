import React from 'react';
import './index.scss';
import SearchItem from "../../components/SearchItem";
import {useDispatch, useSelector} from "react-redux";
import {removeSearchAction} from "../../redux/reducers/UserReducer/actions";
import {removeSearchDataAction} from "../../redux/reducers/MySearchesReducer/actions";


function MySearchesContainer() {
    const dispatch = useDispatch();
    const searches = useSelector(state => state.user.searches);


    const onRemoveSearchSuccess = (searchId) => {
        dispatch(removeSearchAction(searchId))
    };

    const onRemoveSearch = (itemId) => {
        const mySearch = searches.find(c => c._id === itemId);
        if (mySearch) {
            const searchId = mySearch._id;
            dispatch(removeSearchDataAction({
                data: {searchId},
                onSuccess: () => onRemoveSearchSuccess(searchId),
                onError: (err) => {
                    console.log(err)
                }
            }));
        }

    };

    const searchElements = searches.map(item => {
            return <SearchItem
                id={item._id}
                key={item._id}
                incTagsList={item.include_tags}
                excTagsList={item.exclude_tags}
                onDeleteButtonClicked={onRemoveSearch}/>
        }
    );

    return (
        <div className="searches_container">
            {searchElements}
        </div>
    )
}

export default MySearchesContainer;
