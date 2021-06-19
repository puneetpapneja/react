import React from 'react'

export default class Output extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <p>{this.props.children}</p>
        );
    }
}
