import React from 'react'
import Output from '../Output'

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
                <h1>Example 4: Use another component inside a component</h1>
                {!isChangeText ? <h2><Output>Initial text</Output></h2> : <h2><Output>Text changed</Output></h2>}
                <button onClick={this.changeTextHandler}>Change Text</button>
            </div>
        );
    }
}