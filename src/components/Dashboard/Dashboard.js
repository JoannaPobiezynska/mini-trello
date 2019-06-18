import React, { Component } from 'react';
import uuid from 'uuid/v4'

import TaskList from '../TaskList/TaskList';
import classes from './Dashboard.module.css';


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: [
                {name: 'demo list 1', editing: false, id: uuid()},
            ],
            adding: false
        };
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
        this.startAdding = this.startAdding.bind(this);
    }

    startAdding(){
        this.setState({adding: true});
    }

    create(newList) {
        this.setState({
            lists: [...this.state.lists, newList]
        });
        this.setState({adding: false});
    }

    remove(id) {
        this.setState({
            lists: this.state.lists.filter(list => list.id !== id)
        });
    }

    update(id, updatedList) {
        if (id !== undefined) {
            const updatedLists = this.state.lists.map(list => {
                if (list.id === id) {
                    return {...list, list: updatedList};
                }
                return list;
            });
            this.setState({lists: updatedLists});
        } else {this.create({name:updatedList, id: uuid(), editing: false})}
    }
    render() {
        let lists = this.state.lists.map(list => {
            return (
                <TaskList
                    key={list.id}
                    id={list.id}
                    name={list.name}
                    editing={list.editing}
                    createList={this.create}
                    updateList={this.update}
                    removeList={this.remove}
                />
            );
        });
        let show;
        if (this.state.adding) {
            show = <TaskList name="" editing="true" createList={this.create} updateList={this.update}
                             removeList={this.remove}/>
        } else {
            show = <button className={classes.Button} onClick={this.startAdding}>Add new list</button>;
        }
        return (
            <div className={classes.Dashboard}>
                {lists}
                {show}
                {this.state.adding && <button className={classes.Button}>Add new list</button>}
            </div>
        )

    }
}

export default Dashboard;