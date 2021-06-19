import React from 'react'
import withToggle from '../hoc/WithToggle'

class ViewEditUseHOC extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title : this.props.title,            
        }        
        this.input = React.createRef()        
        this.onUpdateHandler = this.onUpdateHandler.bind(this)
    }   

    onUpdateHandler(){
        this.props.toggleHandler() 
        this.setState({title: this.input.current.value})        
        
    }

    render(){
        const {toggleStatus, toggleHandler} = this.props
        const {title} = this.state
        return (
            <div>
                { toggleStatus ? <input type="text" defaultValue={title} ref={this.input} /> : <p>{title} </p>} 
                <button onClick={toggleHandler}>{toggleStatus ? 'Cancel' : 'Edit'}</button>
                {toggleStatus && <button onClick={this.onUpdateHandler}>Update</button>}
            </div>
        )
    }
}

export default withToggle(ViewEditUseHOC)