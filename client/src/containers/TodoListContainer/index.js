import React from 'react';
import _ from 'lodash';
import axios from 'axios';
import './index.css';
import TodoListHeader from "../../components/TodoListHeader";
import TodoList from "../../components/TodoList";
import {CREATE_TODO_ITEM_PATH, GET_TODO_ITEMS_PATH, REMOVE_TODO_ITEM_PATH} from "./constants";
import {filterTodoItemById} from "../../services/itemUtilitiesService";


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
                const todos = res.data;
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
                debugger
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
                debugger
                const todoItem = res.data;
                this.setState(({todos}) => {
                    const newArr = [todoItem, ...todos];
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
        //TODO validate the status - should be in Object.values(STATUSES)
        const todoItem = _.find(this.state.todos, item => item.id === todoId);
        todoItem.status = status;
        this.setState({todos: [todoItem, ...filterTodoItemById(this.state.todos, todoId)]});
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