import React from 'react';
import {connect} from "react-redux";
import './index.css';
import TodoListHeader from "../../components/TodoListHeader";
import TodoList from "../../components/TodoList";
import {createApiRequestAction} from "../../redux/middleware/ApiMiddleware/actions";
import {API_METHOD_POST} from "../../redux/middleware/ApiMiddleware/constants";
import {
    CHANGE_STATUS_TODO_ITEM_PATH,
    CREATE_TODO_ITEM_PATH,
    GET_TODO_ITEMS_PATH,
    REMOVE_TODO_ITEM_PATH
} from "../../constants";
import {
    changeStatusTodoItemAction,
    createAddTodoItemAction,
    createSetTodosAction,
    removeTodoItemAction,

} from "../../redux/reducers/TodoItemReducer/actions";


class TodoListContainer extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            todos: [],
        }
    }

    componentDidMount() {
        this.props.createApiRequestAction({
            url: GET_TODO_ITEMS_PATH,
            onSuccess: res => {
                this.props.createSetTodosAction(res.data);
            }, onError: this.onError
        });
    }

    onError = err => console.log(err);

    onRemoveClicked = (todoId) => {
        this.props.createApiRequestAction({
            method: API_METHOD_POST,
            url: REMOVE_TODO_ITEM_PATH,
            data: {
                todoId,
            },
            onSuccess: () => {
                this.props.removeTodoItemAction(todoId);
            }, onError: this.onError
        });
    };

    onAddClicked = (text) => {
        this.props.createApiRequestAction({
            method: API_METHOD_POST,
            url: CREATE_TODO_ITEM_PATH,
            data: {
                title: text,
            },
            onSuccess: res => {
                this.props.createAddTodoItemAction(res.data);
            }, onError: this.onError
        });
    };

    onChangeStatusClicked = (todoId, status) => {
        this.props.createApiRequestAction({
            method: API_METHOD_POST,
            url: CHANGE_STATUS_TODO_ITEM_PATH,
            data: {
                todoId,
                status,
            },
            onSuccess: ({data: todoItem}) => {
                this.props.changeStatusTodoItemAction(todoItem)
            }, onError: this.onError
        });
    };

    render() {
        const {todos} = this.props;
        return (
            <div className="todo-list-container">
                <TodoListHeader onAddClicked={this.onAddClicked}/>
                <TodoList
                    todos={todos}
                    onRemoveClicked={this.onRemoveClicked}
                    onChangeStatusClicked={this.onChangeStatusClicked}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = {
    createApiRequestAction,
    createSetTodosAction,
    createAddTodoItemAction,
    removeTodoItemAction,
    changeStatusTodoItemAction
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);