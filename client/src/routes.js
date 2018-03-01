import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/home'
import Login from './components/login/login'


const Main = () => (
  <main>
    <Switch>  
      <Route exact path='/' component={Home}/>
      <Route path='/login' component={Login}/>
    </Switch>
  </main>
)

export default Main