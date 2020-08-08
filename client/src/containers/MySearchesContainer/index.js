import React from 'react';
import './index.scss';
import MySearchesBox from "../../components/MySearchesBox";


function MySearchesContainer({searches}) {

    return(
        <div className="searches_container">
            <MySearchesBox searches={searches}/>

        </div>
    )

}

export default MySearchesContainer;
