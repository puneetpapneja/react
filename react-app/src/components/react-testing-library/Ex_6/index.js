import React from 'react';
import imgComponent from '../../../assets/images/react-testing-library/screen-6.png';
import imgTestCase from '../../../assets/images/react-testing-library/test-screen-6.png';
import imgTestCase2 from '../../../assets/images/react-testing-library/test-2-screen-6.png';
import './style.css';

export default class Ex_6 extends React.Component
{

    render(){
        return (
            <div>
                <h1>Example 6</h1>
                <h2>Snapshot testing</h2>
                <b className="color-red">Need to install react-test-renderer package</b>
                <hr />
                <div className="row">
                    <div className="col-md-6">
                        <h2>Component</h2>
                        <img src={imgComponent} />
                    </div>
                    <div className="col-md-6">
                        <div className="col-md-12">
                            <h2>Test Case</h2>
                            <img src={imgTestCase} />
                        </div>
                        <div className="col-md-12">
                            <h2>Snapshot file</h2>
                            <img src={imgTestCase2} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}