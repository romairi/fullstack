import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPapersAction} from "./actions";
import {setPapersAction} from "../../redux/reducers/PapersReducer/actions";


function PaperListContainer(props) {
    const papers = useSelector(state => state.papers);
    const dispatch = useDispatch();

    const onGetPapersSuccess = (response) => {
        dispatch(setPapersAction(response.data));
    };

    React.useEffect(() => {
        dispatch(getPapersAction({onSuccess: onGetPapersSuccess,onError: err => console.log(err)}));
    }, []);


    return (
        <div className="papers_container">
            <div>
                PAPERS SEARCH BOX
            </div>

            {JSON.stringify(papers)}
        </div>
    )
}

export default PaperListContainer;
