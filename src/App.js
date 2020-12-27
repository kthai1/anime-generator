import React from 'react'
import './App.css'
import Sidebar from './Sidebar'
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom"
import NotFoundPage from './404'
import CompletedAnime from './CompletedAnime'

class App extends React.Component{

  render(){
      return (
        <Router>
          <Switch>
          <Route exact path="/" component={Sidebar} />
          <Route exact path="/completedanime" component={CompletedAnime} />
          <Route exact path="/404"  component={NotFoundPage} />
          <Redirect to="/404" /> {/* Has to be last */}
          </Switch>
        </Router>
      )
  }
}

export default App;