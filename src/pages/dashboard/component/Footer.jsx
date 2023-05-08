
import React, { Component } from "react";
// export default class Footer extends Component
// import React from "react";
 export default class Footer extends Component{
    constructor(props){
        super(props);
        
       this.state= {
        // firstName: "",
        // lastName: "",
        // age: 0,
        // height: 0.0
        
       }

    }
    handleChange=(event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    
    }
    // handleFirstName=(event) => {
    //     this.setState({
    //         firstName: event.target.value
    //     })

    // }
    // handleLastName=(event) => {
    //     this.setState({
    //         lastName: event.target.value
    //     })
    
    // }
    // handleAge=(event) => {
    //     this.setState({
    //         age: event.target.value
    //     })
    
    // }
    // handleHeight=(event) =>{
    //     this.setState({
    //         height: event.target.value
    //     })
    // }
    render(){
        return(
            <>
            <p className="fName">First name: {this.state.firstName}</p>
            <p className="lName">Last name: {this.state.lastName}</p> 
            <p className="age">Age: {this.state.age}</p> 
            <p className="height"> Height: {this.state.height}</p> 
            <p className="fullName"> Full name: {this.state.firstName} {this.state.lastName}</p> 

            <label htmlFor="firstName" className="fName">
            First name:<input type="text" name="firstName" id="firstName"
            value={this.state.firstName} onChange={this.handleChange} />
            </label><br /><br />

            <label htmlFor="lastName" >
              Last name:<input type="text" name="lastName" id="lastName" 
              value={this.state.lastName} onChange={this.handleChange}/>
            </label><br /><br />

            <label htmlFor="age">
             Age:<input type="number" name="age" id="age" 
             value={this.state.age} onChange={this.handleChange}/>
            </label><br /> <br />

            <label htmlFor="height">
             Height:<input type="text" name="height" id="height"
             value={this.state.height} onChange={this.handleChange} />
            </label><br /> <br />
            <button type="submit" name="submit" id="submit"> submit</button>
            </>
        )
    }

}
