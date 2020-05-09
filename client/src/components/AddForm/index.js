import React from 'react';
import './index.scss';
import Button from "../Button";
import TextField from "../TextField";

export default class AddForm extends React.Component {

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
                <form className="form-items"
                      onSubmit={this.onSubmit}>
                    <TextField
                        type="text"
                        label="new task"
                        onChange={this.onTitleChange}
                        value={this.state.title}
                    />
                    <Button typeBtn>
                        add
                    </Button>
                </form>
            </div>
        );
    }
}