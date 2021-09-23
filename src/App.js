import './App.css';
import navbar from './components/layouts/navbar';
import index from './components/layouts/index';
import Lyrics from './components/tracks/Lyrics';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React, { Component } from 'react';
import Provider from './context'

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <React.Fragment >
            <Navbar />

            <div className="container">
              <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/lyrics/track/:id" component={Lyrics} />
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </Provider>
      
      
    );
  }
}

export default App;