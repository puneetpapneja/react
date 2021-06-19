import React from 'react'
import withToggle from '../hoc/WithToggle'

class ViewEditUseHOC extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title : this.props.title,
            input: ''
        }        

        this.onUpdateHandler = this.onUpdateHandler.bind(this)
    }

    onChangeHandler(e){
        this.setState({input: e.target.value, })        
    }

    onUpdateHandler(){
        
        this.setState({title: this.state.input,input:''}, ()=> this.props.toggleHandler() )        
    }

    render(){
        const {toggleStatus, toggleHandler} = this.props
        const {title,input } = this.state
        return (
            <div>
                { toggleStatus ? <input type="text" value={input && title}  onChange={this.onChangeHandler} /> : <p>{input || title} </p>} 
                <button onClick={toggleHandler}>{toggleStatus ? 'Cancel' : 'Edit'}</button>
                {toggleStatus && <button onClick={this.onUpdateHandler}>Update</button>}
            </div>
        )
    }
}

export default withToggle(ViewEditUseHOC)