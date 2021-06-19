import React from 'react'

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false,
            error: ''
        }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    componentDidCatch(error, errorInfo) {
        console.log("Error : " + error + "Error Info:" + errorInfo)
    }

    render() {
        const { hasError } = this.state
        return hasError ? <h1>Something went wrong</h1> : this.props.children
    }
}