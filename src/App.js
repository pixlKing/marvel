import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect  } from 'react-router-dom';
import Detail from './components/detail/detail.js';
import Home from './components/home/home.js';
import './App.scss';

function App() {

    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/detail/:id">
                        <Detail />
                    </Route>
                    <Route path="/:page">
                        <Home />
                    </Route>
                    <Redirect exact from="/" to="/0" />
                </Switch>
            </Router>
        </div>
    )
}

export default App;
