import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';

import * as actions from '../../store/actions/index';
import classes from './Auth.module.css'
import Spinner from '../Spinner/Spinner'

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            loading: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onAuth( this.state.email, this.state.password);
    }
    render() {

        let form = <form className={classes.AuthForm} onSubmit={this.handleSubmit}>
            <input
                type='text'
                placeholder='Email'
                id='email'
                name='email'
                value={this.state.email}
                onChange={this.handleChange}
            />
            <input
                type='password'
                placeholder='Password'
                id='password'
                name='password'
                value={this.state.password}
                onChange={this.handleChange}
            />
            <button>Sign in</button>
        </form>

        if (this.props.loading) {
            form = <Spinner/>
        }

        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.reason}</p>
            );
        }

        let authRedirect = null;
        if (this.props.isAuthenticated) {
            authRedirect = <Redirect to="/dashboard"/>
        }
        return (
            <div className={classes.Auth}>
                {authRedirect}
                {errorMessage}
                {form}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: ( email, password ) => dispatch( actions.auth( email, password ) ),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);