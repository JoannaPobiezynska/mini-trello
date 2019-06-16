import React, { Component } from "react";
import uuid from "uuid/v4";
import classes from "./NewTaskForm.module.css";

class NewTaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = { task: "" };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.createTask({ ...this.state, id: uuid(), completed: false });
        this.setState({ task: "" });
    }
    render() {
        return (
            <form className={classes.NewTaskForm} onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    placeholder='New Task'
                    id='task'
                    name='task'
                    value={this.state.task}
                    onChange={this.handleChange}
                />
                <button>Add Task</button>
            </form>
        );
    }
}
export default NewTaskForm;
