import './App.css';
import React from 'react';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Signup from './components/login/Signup';
import Home1 from './components/home1/Home1'
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';


const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/login">
                    <Login/>
                </Route>
                <Route exact path="/signup">
                    <Signup/>
                </Route>
                <Route exact path="/home1">
                    <Home1/>
                </Route>
            </Switch>
        </Router>
    );
}


export default App;
