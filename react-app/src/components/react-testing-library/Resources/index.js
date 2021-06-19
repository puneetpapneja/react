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
                            onClick={(event)=> this.openUrl("https://jestjs.io/docs/api",event)}  
                            >
                            Click here
                        </a> for Jest Official documentation
                    </li>
                    <li>
                        <a href="#" 
                            onClick={(event)=> this.openUrl("https://testing-library.com/docs/react-testing-library/intro/",event)}
                        >
                            Click here
                        </a> for React-testing-library Official documentation
                    </li>                    
                </ul>
            </div>
        )
    }
}