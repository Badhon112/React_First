import React, { Component } from 'react'

export default class Ref extends Component {
    constructor(props){
        super(props);
        this.state={
            value:""
        }
        this.textinput=React.createRef();
    }
    handleSubmit=e=>{
        e.preventDefault();
       this.setState({value:this.textinput.current.value});
    }
    render() {
        return (
            <div>
                <h1> You Type:  {this.state.value}</h1>
                <form onSubmit={this.handleSubmit}>
                   Input: <input type="text" ref={this.textinput} />
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}
