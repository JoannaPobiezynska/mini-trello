import React, { Component } from 'react';

import TaskList from '../TaskList/TaskList';
import classes from './Dashboard.module.css';


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: [
                {name: 'demo list 1'},
                {name: 'demo list 2'},
            ]
        }
    }
    render() {
        let lists = this.state.lists.map(list => {
            return (
                <TaskList
                    name={list.name}
                />
            );
        });
        return (
            <div className={classes.Dashboard}>
                {lists}
            </div>
        )

    }
}

export default Dashboard;