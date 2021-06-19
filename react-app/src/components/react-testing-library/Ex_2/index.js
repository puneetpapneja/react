import React from 'react';
import imgComponent from '../../../assets/images/react-testing-library/screen-2.png';
import imgTestCase from '../../../assets/images/react-testing-library/test-screen-2.png';
import './style.css';

export default class Ex_2 extends React.Component
{

    render(){
        return (
            <div className="container">
                <h1>Example 2</h1>
                <h2>Created Custom component with Jest test-case</h2>
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
        )
    }

}