import React from 'react';

import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        {props.isAuth && <NavigationItem link="/dashboard">Dashboard</NavigationItem>}
        {props.isAuth && <NavigationItem link="/logout">Logout</NavigationItem>}
    </ul>
);

export default navigationItems;