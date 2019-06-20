import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Layout.module.css';
import Navbar from '../../components/Navigation/Navbar/Navbar';


class Layout extends Component {
    render() {
        return (
            <div className={this.props.isAuthenticated ? classes.LayoutAuth :classes.Layout}>
                <Navbar isAuthenticated={this.props.isAuthenticated}/>
                <main className={classes.Main}>
                    {this.props.children}
                </main>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect(mapStateToProps)(Layout);

