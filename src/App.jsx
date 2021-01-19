import React from 'react'
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'
// import Login from './components/Login'
import Home from './components/Home';
import Header from './components/Header';
import Dashboard from "./components/Dashboard";
import Equipos from './components/Equipos';
import Proyectos from './components/Proyectos';

const App = () => {

  return (
    // <Login/>
    <Router>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/dashboard' component={Dashboard}/>
        <Route exact path='/equipos' component={Equipos}/>
        <Route exact path='/proyectos' component={Proyectos}/>
      </Switch>
    </Router>
  )

}

export default App