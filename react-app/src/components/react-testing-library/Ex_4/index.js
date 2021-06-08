import React from 'react'
import Output from '../Output'
import imgComponent from '../../../assets/images/react-testing-library/screen-4.png';
import imgTestCase from '../../../assets/images/react-testing-library/test-screen-4.png';
import './style.css';

export default class Ex_4 extends  React.Component{
    constructor(props){
        super(props)
        this.state = {
            isChangeText: false
        }         
    }

   changeTextHandler = ()=>{
        this.setState({isChangeText: true})
    }

    render(){
        const {isChangeText} = this.state

        return (
            <div>
                <h1>Example 4</h1>
                <h2>Test case for use another component inside a component</h2>
                {!isChangeText ? <h2><Output>Initial text</Output></h2> : <h2><Output>Text changed</Output></h2>}
                <button onClick={this.changeTextHandler}>Change Text</button>
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
}