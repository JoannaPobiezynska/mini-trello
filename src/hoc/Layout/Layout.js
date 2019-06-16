import React from 'react';
import classes from './Layout.module.css';

import Navbar from '../../components/Navigation/Navbar/Navbar';
import Dashboard from '../../components/Dashboard/Dashboard';

function Layout() {
    return (
        <div className={classes.Layout}>
            <Navbar/>
            <main className={classes.Main}>

                <Dashboard/>
            </main>
        </div>
    );
}

export default Layout;

