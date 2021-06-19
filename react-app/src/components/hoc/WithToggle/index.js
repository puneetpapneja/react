import React from 'react'

const withToggle = (PassedComponent) => {
   return  class WithToggle extends React.Component{
       constructor(props){
           super(props)
           this.state = {
               toggleStatus: false
           }

           this.toggle = this.toggle.bind(this)
       }

       toggle(){
            this.setState({
                toggleStatus: !this.state.toggleStatus
            })
       }

       render(){
           return (
               <PassedComponent 
                    {...this.props}
                    toggleHandler = {this.toggle}
                    toggleStatus = {this.state.toggleStatus} 
                />
           )
       }
    }
}

export default withToggle