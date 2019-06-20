import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

import Dashboard from './components/Dashboard/Dashboard';
import Auth from './components/Auth/Auth';
import Logout from './components/Auth/Logout';

import './App.css';

import Layout from './hoc/Layout/Layout'

class App extends Component {
    render() {
        let routes = <Switch>
            <Route path="/" exact component={Auth}/>
            <Redirect to="/"/>
        </Switch>

        if (this.props.isAuthenticated) {
            routes = <Switch>
                <Route path="/logout" component={Logout}/>
                <Route path="/board/:id" exact component={Dashboard}/>
                {/* once there are more boards path '/dashboard' should direct to list of boards*/}
                <Route path="/dashboard" exact component={Dashboard}/>
                <Redirect to="/dashboard"/>
            </Switch>
        }
        return (
            <div className="App">
                <Layout>
                    {routes}
                </Layout>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};


export default withRouter(connect(mapStateToProps)(App));
