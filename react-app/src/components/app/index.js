//import logo from './logo.svg';
import './style.css';
import React from 'react';
import Menu from '../menu'
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import About from '../about'

function App() {
  return (
    
    <div className="App">      
    <Router>
        <Menu />
        <Switch>
          <Route path="/">
            <About />
          </Route>  
          <Route path="/about">
            <About />
          </Route>         
          </Switch>
          </Router>  
      <header className="App-header">        
      
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
