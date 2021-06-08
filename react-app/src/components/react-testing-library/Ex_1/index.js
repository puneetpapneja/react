//import logo from './logo.svg';
import './style.css';
import React from 'react';

function Ex_1() {
  return (
    <div className="App">      
      <header className="App-header">        
      <h1>Example 1</h1>
      <h2>Default Jest test-case provided by Reactjs</h2>
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

       <div className="row">
         <div className="col-md-6">
            <h2>Component</h2>
         </div>
         <div className="col-md-6">
            <h2>Test Case</h2>
         </div>
       </div>
    </div>
  );
}

export default Ex_1;
