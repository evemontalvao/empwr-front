import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../view/pages/Home.jsx'
import SignIn from '../view/pages/SignIn.jsx'

class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
            	<Switch>
		        	<Route exact path="/" component={Home}/>
		        	<Route path="/entrar" component={SignIn}/>
		        </Switch>
		    </BrowserRouter>
        )
    }
}

export default Routes