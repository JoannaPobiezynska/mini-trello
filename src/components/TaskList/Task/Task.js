import React, {Component} from 'react';

import classes from './Task.module.css';

class Task extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            task: this.props.task
        };
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleRemove() {
        this.props.removeTask(this.props.id);
    }

    toggleForm() {
        this.setState({editing: !this.state.editing});
    }

    handleUpdate(e) {
        e.preventDefault();
        this.props.updateTask(this.props.id, this.state.task);
        this.setState({editing: false});
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleToggle(e) {
        this.props.toggleTask(this.props.id);
    }

    render() {
        let show;
        if (this.state.editing) {
            show = <form className={classes.EditForm} onSubmit={this.handleUpdate}>
                <input
                    type='text'
                    value={this.state.task}
                    name='task'
                    onChange={this.handleChange}
                />
                <button>Save</button>
            </form>
        } else {
            show = <div className={classes.Todo} onClick={this.handleToggle}>
                        {this.props.task}
                    </div>

        }
        return (
            <div className={this.props.completed ? classes.TaskCompleted : classes.Task}>
                {show}
                <div className={classes.Buttons}>
                    <button onClick={this.toggleForm}>
                        <i className='fas fa-pen'/>
                    </button>
                    <button onClick={this.handleRemove}>
                        <i className='fas fa-trash'/>
                    </button>
                </div>
            </div>
        )

    }
}

export default Task;