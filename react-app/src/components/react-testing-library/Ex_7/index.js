import React from 'react'
import imgComponent from '../../../assets/images/react-testing-library/screen-7.png';
import imgTestCase from '../../../assets/images/react-testing-library/test-screen-7.png';

import './style.css'

export default class Ex_7 extends React.Component{
    constructor(props){
        super(props)
    }

    openUrl = (url,event) =>{
        event.preventDefault()
        window.open(url,"_blank")
    } 

    render(){
        return (
            <div>
                <h1>Example 7 </h1>
                <h2>Jest Global Apis <a href="#"
                    onClick={(event)=> this.openUrl("https://jestjs.io/docs/api",event)}  >
                        click here</a> for official documentation
                </h2>         
                <p>In this example we are going to show Name which was pass in props. If no name found in props 
                    then we can show text as stranger</p>       
                 <h2>Hello, <span className="color-red">{this.props.name ? this.props.name : 'Stranger'}!</span></h2> 
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