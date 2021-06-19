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
import Ex_6 from '../react-testing-library/Ex_6'
import Ex_7 from '../react-testing-library/Ex_7'
import ViewEditUseHOC from '../viewEditUseHOC';
import Resources from '../react-testing-library/resources';
import Enzyme_Ex_1 from '../enzyme/Ex_1'

function App() {
  return (
    
    <div className="App">
      
    <Router>
        <Menu />
        <h1>Learn React</h1> 
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
          <Route path="/react-testing-library/example-6">
            <Ex_6 />
          </Route>
          <Route path="/react-testing-library/example-7">
            <Ex_7 name="Puneet"/>
          </Route>
          <Route path="/react-testing-library/resources">
            <Resources />
          </Route> 
          <Route path="/enzyme/example">
            <Enzyme_Ex_1 />
          </Route>
          <Route path="/hoc/view-edit">
            <ViewEditUseHOC title="Puneet" />
          </Route>
          <Redirect to="/" />
          </Switch>
          </Router> 
          
    </div>
  );
}

export default App;
