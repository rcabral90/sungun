import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/home'
import Login from './components/login/login'

export default () => {
  return(
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/login' component={Login}/>
    </Switch>
  </BrowserRouter>
  )
}