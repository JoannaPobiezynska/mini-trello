import React, { Component } from 'react';

import classes from './TaskList.module.css';
import Task from './Task/Task'

class TaskList extends Component {
    render() {
        return (
            <div className={classes.TaskList}>
                <h1>Task list</h1>
                <Task/>
                <Task/>
                <Task/>
            </div>
        )
    }
}

export default TaskList;