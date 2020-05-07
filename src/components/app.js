import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import On from '../pages/On'

function App(){
    return(
        <React.Fragment>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={On}/>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/sign-up' component={SignUp}/>
                    <Route exact path='/home' component={Home}/>
                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
        </React.Fragment>
    )
}

export default App
