import {ADD_TODO_ITEM_ACTION_TYPE, SET_TODOS_ACTION_TYPE, REMOVE_TODO_ITEM_ACTION_TYPE} from "./constants";
import {filterTodoItemById, sortTodoItems} from "../../../services/itemUtilitiesService";

function todoItemReducer(state = [], action) {
    let newState;
    switch (action.type) {
        case SET_TODOS_ACTION_TYPE:
            newState = [...sortTodoItems(action.payload)];
            break;
        case ADD_TODO_ITEM_ACTION_TYPE:
            newState = sortTodoItems([action.payload, ...state]);
            break;
        case REMOVE_TODO_ITEM_ACTION_TYPE:
            newState = filterTodoItemById(state, action.payload);
            break;
        default:
            newState = state;
    }
    return newState;
}

export default todoItemReducer;