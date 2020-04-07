import React from 'react';
import _ from 'lodash';
import './index.css';
import Todolist from "../../components/Todolist";
import {STATUSES} from "./constanst";

export default class TodoListContainer extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            todos: _.range(10).map(idx => ({
                id: `todo_id_${idx}`,
                title: `todo_title_${idx}`,
                status: Object.values(STATUSES)[_.random(0, 2)],
            })),
        };
    }

    onRemoveClicked = (todoId) => {

        this.setState({todos: this.state.todos.filter(todo => todo.id !== todoId)});
    };

    render() {
        const {todos} = this.state;
        return (
            <div className="todolist_container">
                <div className="todolist_header"></div>
                <Todolist todos={todos} onRemoveClicked={this.onRemoveClicked}/>
            </div>
        );
    }
}


// export default function TodoListContainer() {
//     const t = STATUSES;
//     // const items = _.range(10).map(idx => `todo-${idx + 1}`); // TODO temp impl of todo
//     const items = _.range(10).map(idx => ({
//         id: `todo_id_${idx}`,
//         title: `todo_title_${idx}`,
//         status: Object.values(STATUSES)[_.random(0,2)],
//     }));
//     return (
//         <div className="todolist_container">
//             <div className="todolist_header"></div>
//             <Todolist todos={items} onRemoveClicked={onRemoveClicked}/>
//         </div>
//     );
// }