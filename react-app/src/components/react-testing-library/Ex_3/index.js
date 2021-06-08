import React from 'react'
import imgComponent from '../../../assets/images/react-testing-library/screen-3.png';
import imgTestCase from '../../../assets/images/react-testing-library/test-screen-3.png';
import './style.css';

export default class Ex_3 extends React.Component{
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
                <h1>Example 3</h1>
                <h2>Test case for component with User intraction and state</h2>
                {!isChangeText ? <h2>Initial text</h2> : <h2>Text changed</h2>}
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
        )
    }
}