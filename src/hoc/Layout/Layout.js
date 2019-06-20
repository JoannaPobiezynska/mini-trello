import React, { Component } from 'react';
import classes from './Layout.module.css';

import Navbar from '../../components/Navigation/Navbar/Navbar';


class Layout extends Component {
    render() {
        return (
            <div className={classes.Layout}>
                <Navbar/>
                <main className={classes.Main}>
                    {this.props.children}
                </main>
            </div>
        );
    }
}

export default Layout;

