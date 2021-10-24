import React, { Component } from 'react'

export default class Ref2 extends Component {
    constructor(props){
        super(props);
        this.state={
            value:""
        }
        this.textInput=React.createRef();
    }
    hanldeSubmit=e=>{
        e.preventDefault();
        this.setState({value:this.textInput.current.value})
    }
    render() {
        return (
            <div>
                <h1>You Type: {this.state.value}</h1>
                <form onSubmit={this.hanldeSubmit} >
                Input : <input type="text" ref={this.textInput} />
                <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
