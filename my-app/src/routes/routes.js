import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";


import Home from '../pages/Home';
import Login from '../pages/Login';
import ToDo from '../pages/ToDo';


function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/toDo" component={ToDo}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;