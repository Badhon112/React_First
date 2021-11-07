import React, { Component } from 'react'
import Army from "./WirhArmy"
 class HOC extends Component {
   state={
       value:0
   }
   handleChange=()=>{
       this.setState({value:this.state.value+1})
   }
    render() {
        return (
            <div className="text-6xl">
                <h2 onMouseOver={this.handleChange} > 
                Badhon Has {this.props.hocunman} 
                <br />
                You Type: {this.state.value}</h2>
            </div>
        )
    }
}
export default Army(HOC)