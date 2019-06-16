import React, { Component } from 'react';
import uuid from 'uuid/v4'

import classes from './TaskList.module.css';
import Task from './Task/Task'

class TaskList extends Component {

    constructor(props) {
        super(props);
        this.state = {tasks: [{task: 'walk dog', completed: false, id: uuid()}]}
    }
    render() {

        const tasks = this.state.tasks.map(todo => {
            return (
                    <Task
                        key={todo.id}
                        id={todo.id}
                        task={todo.task}
                        completed={todo.completed}
                        // removeTodo={this.remove}
                        // updateTodo={this.update}
                        // toggleTodo={this.toggleCompletion}
                    />
            );
        });
        return (
            <div className={classes.TaskList}>
                <h1>Task list</h1>
                {tasks}
            </div>
        )
    }
}

export default TaskList;