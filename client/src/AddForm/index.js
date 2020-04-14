import React from 'react';
import './index.css';

export default class AddForm extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        title: ''
    };

    onTitleChange = (e) => {
        this.setState({
            title: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAddClicked(this.state.title);
        this.setState({
            title: ''
        });
    };

    render() {
        return (
            <div className="add-form">
                <form
                    className="form-inline justify-content-sm-start mb-2 "
                    onSubmit={this.onSubmit}>
                    <div className="form-group mx-sm-1 mb-2 mt-2">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="new task"
                            onChange={this.onTitleChange}
                            value={this.state.title}
                        />
                    </div>
                    <button
                        className="btn btn-primary mb-2 mt-2">
                        add
                    </button>
                </form>
            </div>
        );
    }
}