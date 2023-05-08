
//It is advisable to always use React Fragment instead of div, because every time
//div is used, it creates a node in the memory which inturn slows down the appl\
//hence the reason for React.Fragment as used in the sample below

import React, {  useState } from "react"

function DivFragment(){
    let initialState = {
        institute: "",
        cohort: "",
        admissionYear: "",
        admissionMonth: ""
       
    }
   const [data, setData] = useState(initialState)
   const [firstName, setFirstName] =useState("");
   const [lastName, setLastName] = useState("");
   const [email, setEmail] = useState("");
   const [phoneNumber, setPhoneNumber] = useState("");

   function handleChange(event){
    if(event.target.name === 'firstName'){
    setFirstName(event.target.value)
    }else if(event.target.name === 'lastName'){
        setLastName(event.target.value)
    }else if (event.target.name === 'email'){
        setEmail(event.target.value)
    }else if (event.target.name === 'phoneNumber'){
        setPhoneNumber(event.target.value)
   }else{
    setData({
        ...data,
        [event.target.name]: event.target.value
    })
   }
}
    return(
        <React.Fragment>
            <div className="ptags">
                <p className="one">First Name: {firstName}</p>
                <p className="two">Last Name: {lastName}</p>
                <p className="three">Email: {email}</p>
                <p className="four">Phone Number: {phoneNumber}</p>
                <p className="five">Institution Name: {data.institute}</p>
                <p className="six">Cohort: {data.cohort}</p>
                <p className="seven">Admission Year: {data.admissionYear}</p>
                <p className="eight">Admission month: {data.admissionMonth}</p>
            </div>
            <label htmlFor="fName">
             First Name:   <input type="text" name="firstName" id="fName" 
                value={firstName} onChange={handleChange} />
            </label><br /> <br />

            <label htmlFor="lName">
              Last Name:  <input type="text" name="lastName" id="lName" 
               value={lastName} onChange={handleChange} />
            </label><br /> <br />

            <label htmlFor="email">
             Email Address:   <input type="text" name="email" id="email" 
                value={email} onChange={handleChange}/>
            </label><br /><br />

            <label htmlFor="pNumber">
              Phone Number:  <input type="text" name="phoneNumber" id="pNumber" 
                value={phoneNumber} onChange={handleChange}/>
            </label><br /><br />
        </React.Fragment>
    )
}
export default DivFragment