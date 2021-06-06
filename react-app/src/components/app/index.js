//import logo from './logo.svg';
import './style.css';
import React from 'react';
import Menu from '../menu'
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import About from '../about'
import Ex_1 from '../react-testing-library/Ex_1'
import Ex_2 from '../react-testing-library/Ex_2'
import Ex_3 from '../react-testing-library/Ex_3'
import Ex_4 from '../react-testing-library/Ex_4'
import Ex_5 from '../react-testing-library/Ex_5'

function App() {
  return (
    
    <div className="App">
      <h1>Learn React</h1>
    <Router>
        <Menu />
        <Switch>
          <Route exact path="/">
            <About />
          </Route>          
          <Route path="/react-testing-library/example-1">
            <Ex_1 />
          </Route>         
          <Route path="/react-testing-library/example-2">
            <Ex_2 />
          </Route>         
          <Route path="/react-testing-library/example-3">
            <Ex_3 />
          </Route>         
          <Route path="/react-testing-library/example-4">
            <Ex_4 />
          </Route>         
          <Route path="/react-testing-library/example-5">
            <Ex_5 />
          </Route>         
          <Redirect to="/" />
          </Switch>
          </Router>  
    </div>
  );
}

export default App;
