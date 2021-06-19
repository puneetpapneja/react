import imgComponent from '../../../assets/images/react-testing-library/screen-1.png';
import imgTestCase from '../../../assets/images/react-testing-library/test-screen-1.png';
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
    <hr />
       <div className="row">
         <div className="col-md-6">
            <h2>Component</h2>
            <img src={imgComponent} />
         </div>
         <div className="col-md-6">
            <h2>Test Case</h2>
            <img src={imgTestCase} />
         </div>
       </div>
    </div>
  );
}

export default Ex_1;
