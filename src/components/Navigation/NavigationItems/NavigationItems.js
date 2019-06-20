import React from 'react';

import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem><i className="fas fa-user icon"></i></NavigationItem>
        <NavigationItem><i className="fas fa-user-circle icon"></i></NavigationItem>
    </ul>
);

export default navigationItems;