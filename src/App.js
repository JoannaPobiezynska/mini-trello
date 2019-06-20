import React, { Component } from 'react';
import { Route, Switch, withRouter} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard'

import './App.css';

import Layout from './hoc/Layout/Layout'

class App extends Component {
    render() {
        let routes = <Switch>
            <Route path="/board/:id" exact component={Dashboard}/>
            <Route path="/dashboard" exact render={() => <h1>list of boards</h1>}/>
            <Route path="/" exact render={() => <h1>main app</h1>}/>
        </Switch>
        return (
            <div className="App">
                <Layout>
                    {routes}
                </Layout>
            </div>
        );
    }
}

export default withRouter(App);
