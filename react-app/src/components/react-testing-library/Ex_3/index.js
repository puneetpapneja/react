import React from 'react'

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
                <h2> Component with User intraction and state</h2>
                {!isChangeText ? <h2>Initial text</h2> : <h2>Text changed</h2>}
                <button onClick={this.changeTextHandler}>Change Text</button>
            </div>
        )
    }
}