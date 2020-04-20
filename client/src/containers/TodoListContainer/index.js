import React from 'react';
import _ from 'lodash';
import axios from 'axios';
import './index.css';
import TodoListHeader from "../../components/TodoListHeader";
import TodoList from "../../components/TodoList";

import {filterTodoItemById, sortTodoItems} from "../../services/itemUtilitiesService";
import {
    CHANGE_STATUS_TODO_ITEM_PATH,
    CREATE_TODO_ITEM_PATH,
    GET_TODO_ITEMS_PATH,
    REMOVE_TODO_ITEM_PATH
} from "../../constants";


export default class TodoListContainer extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            todos: [],
        }
    }

    componentDidMount() {
        axios.get(GET_TODO_ITEMS_PATH)
            .then(res => {
                const todos = sortTodoItems(res.data);
                this.setState({todos});
            })
            .catch(err => {
                console.error(err);
            });
    }

    onRemoveClicked = (todoId) => {
        axios.post(REMOVE_TODO_ITEM_PATH, {
            todoId
        })
            .then(() => {
                this.setState(({todos: filterTodoItemById(this.state.todos, todoId)}));
            })
            .catch(err => {
                console.error(err);
            });
    };

    onAddClicked = (text) => {
        axios.post(CREATE_TODO_ITEM_PATH, {
            title: text,
        })
            .then(res => {
                const todoItem = res.data;
                this.setState(({todos}) => {
                    const newArr = sortTodoItems([todoItem, ...todos]);
                    return {
                        todos: newArr
                    };
                });
            })
            .catch(err => {
                console.error(err);
            });
    };

    onChangeStatusClicked = (todoId, status) => {
        axios.post(CHANGE_STATUS_TODO_ITEM_PATH, {
            todoId,
            status
        })
            .then(({data: todoItem}) => {
                this.setState({todos: sortTodoItems([todoItem, ...filterTodoItemById(this.state.todos, todoId)])});
            })
            .catch(err => {
                console.error(err);
            });
    };

    render() {
        const {todos} = this.state;
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
};