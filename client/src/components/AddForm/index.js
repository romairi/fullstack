import React from 'react';
import './index.scss';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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
                    <Button variant="contained" size="medium"  color="primary">
                        add
                    </Button>
                </form>
            </div>
        );
    }
}