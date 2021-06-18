import React from 'react'
import './style.css'

export default class Resources extends React.Component{

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
                <h1>Resources</h1>
                <ul>
                    <li>
                    
                        <a href="​​​​#" 
                            onClick={(event)=> this.openUrl("https://enzymejs.github.io/enzyme/docs/api/",event)}  
                            >
                            Click here
                        </a> for Enzyme Official documentation
                    </li>
                                      
                </ul>
            </div>
        )
    }
}