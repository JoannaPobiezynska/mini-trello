import React from 'react';

import classes from './Navbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems'

const Navbar = props => {

    return <header className={classes.Navbar}>
        <div className={classes.Brand}>Mini Trello</div>
        <NavigationItems isAuth={props.isAuthenticated}/>
    </header>

}

export default Navbar;
