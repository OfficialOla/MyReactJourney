import React from "react";
import '../styles/TopNav.css';
import LoginSvg from '../../../assets/image/login.svg'

class TopNav extends React.Component{
    constructor(props){
        super(props);
        
       this.state= {
        // firstName: "",
        // lastName: "",
        // age: 0,
        // height: ""
        
       }
    }
    handleChange=(event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    
    }
    render(){
        return(
            <>
            <p className="fName">First name: {this.state.firstName}</p>
            <p className="lName">Last name: {this.state.lastName}</p> 
            <p className="age">Age: {this.state.age}</p> 
            <p className="height"> Height: {this.state.height}</p> 
            <p className="fullName"> Full name: {this.state.firstName} {this.state.lastName}</p> 
            </>
        )
    }

      render(){
        return(
            
            <div className="mainContainer">
            <div className="topNav">
            <p className="logo">YO</p>  
            <nav>
                <li><a href="https://google.com" className= "names1">Features</a></li>
                <li><a href="https://semicolon.africa" className="names2">Integration</a></li>
                <li><a href="https://github.com" className="names3">Pricing</a></li>
                <li><a href="https://jw.org" className="names4">Company</a></li>
                <li><a href="https://www.freecodecamp.org" className="namee5">Blog</a></li>
                <div className="getDemo">
                                        <p className="demo">Get a Demo</p>
                </div>
                <div className="login">
                    <img src={LoginSvg} alt="fav"/>
                    <p className="ptag_login">Login</p>
                </div>
            </nav>
            </div>
        
            <div class="footer">
                    <div class="innerFooter">
                    <div class="w">
                      <h2>Product</h2>
                      <p>Features</p>
                      <p>Pricing</p>
                      <p>Integrations</p>
                      <p>Product</p>  
                    </div>
                    <div class="x">
                        <h2>Company</h2>
                        <p>About us</p>
                        <p>Contact us</p>
                        <p>Submit a ticket</p>
                        <p>Privacy policy</p>
                        <p>Terms & Conditions</p><br />
                        <p>&copy; 2020 Olayinka Inc. All rights reserved</p>
                    </div>
                    <div class="y">
                        <h2>Users</h2>
                            {/* <p className="fName">First name: {this.state.firstName}</p>    
                            <p className="lName">Last name: {this.state.lastName}</p> 
                            <p className="age">Age: {this.state.age}</p> 
                             <p className="height"> Height: {this.state.height}</p> 
                            <p className="fullName"> Full name: {this.state.firstName} {this.state.lastName}</p> */}
            <label htmlFor="firstName" className="fName">
            <input type="text" placeholder="Enter your first name" name="firstName" id="firstName"
            value={this.state.firstName} onChange={this.handleChange} />
            </label><br /><br />

            <label htmlFor="lastName" >
              <input type="text" placeholder="Enter last name" name="lastName" id="lastName" 
              value={this.state.lastName} onChange={this.handleChange}/>
            </label><br /><br />

            <label htmlFor="age">
             <input type="number" placeholder="Enter your age" name="age" id="age" 
             value={this.state.age} onChange={this.handleChange}/>
            </label><br /> <br />

            <label htmlFor="height">
             <input type="text" placeholder="Enter your height" name="height" id="height"
             value={this.state.height} onChange={this.handleChange} />
            </label><br /> <br />
            {/* <button type="submit" name="submit" id="submit"> submit</button>         */}
                        {/* <p>Login</p>
                        <p>Get a demo</p>
                        <p>Talk to us</p>
                        <p>Privacy policy</p>
                        <p>Terms & Conditions</p><br />
                        <p>Follow us on social media</p> */}
                    </div>
                    <div class="z">
                        <h2>Guides</h2>
                        <p>MSP</p>
                        <p>MSP Sales</p>
                    </div>
                    <div class="a">
                        <h2>Contact us</h2>
                        <p>Address</p>
                    </div>
                </div> 
        </div>
       
        </div>
        
        )
      }

    }
export default TopNav;