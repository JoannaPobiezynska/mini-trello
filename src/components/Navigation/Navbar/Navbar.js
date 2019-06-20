import React, { Component } from 'react';

import classes from './Navbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems'

class Navbar extends Component {
    render() {
        return <header className={classes.Navbar}>
            <div className={classes.Brand}>Mini Trello</div>
            <NavigationItems/>
        </header>
    }
}

export default Navbar;
