import React, {Component} from 'react';
import uuid from 'uuid/v4'

import classes from './TaskList.module.css';
import Task from './Task/Task';
import NewTaskForm from '../NewTaskForm/NewTaskForm';

class TaskList extends Component {
    static defaultProps = {
        editing: false
    }
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            editing: this.props.editing,
            name: this.props.name
        };

        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
    }

    create(newTask) {
        this.setState({
            tasks: [...this.state.tasks, newTask]
        });
    }

    remove(id) {
        this.setState({
            tasks: this.state.tasks.filter(t => t.id !== id)
        });
    }

    update(id, updatedTask) {
        const updatedTasks = this.state.tasks.map(task => {
            if (task.id === id) {
                return {...task, task: updatedTask};
            }
            return task;
        });
        this.setState({tasks: updatedTasks});
    }

    toggleCompletion(id) {
        const updatedTasks = this.state.tasks.map(task => {
            if (task.id === id) {
                return {...task, completed: !task.completed};
            }
            return task;
        });
        this.setState({tasks: updatedTasks});
    }

    handleRemove() {
        this.props.removeList(this.props.id);
    }

    toggleForm() {
        this.setState({editing: !this.state.editing});
    }

    handleUpdate(e) {
        e.preventDefault();
        this.props.updateList(this.props.id, this.state.name);
        this.setState({editing: false});
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        const tasks = this.state.tasks.map(todo => {
            return (
                <Task
                    key={todo.id}
                    id={todo.id}
                    task={todo.task}
                    completed={todo.completed}
                    removeTask={this.remove}
                    updateTask={this.update}
                    toggleTask={this.toggleCompletion}
                />
            );
        });
        let listName;
        if (this.props.editing || this.state.editing) {
            listName = <form className={classes.EditForm} onSubmit={this.handleUpdate}>
                <input
                    type='text'
                    value={this.state.name}
                    name='name'
                    onChange={this.handleChange}
                />
                <button>Save</button>
            </form>
        } else {
            listName = <div className={classes.ListName}>
                <h3>{this.props.name}</h3>
                <div className={classes.Buttons}>
                    <button onClick={this.toggleForm}>
                        <i className='fas fa-pen'/>
                    </button>
                    <button onClick={this.handleRemove}>
                        <i className='fas fa-trash'/>
                    </button>
                </div>
            </div>
        }
        return (
            <div className={classes.TaskList}>
                {listName}
                {tasks}
                <NewTaskForm createTask={this.create}/>
            </div>
        )
    }
}

export default TaskList;