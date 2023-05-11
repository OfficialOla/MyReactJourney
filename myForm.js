import React from "react";
import '../styles/myForm.css'
import {Formik, Form, Field, ErrorMessage} from 'formik';

const myForm = () =>{
    const initialData = {
        firstName:"",
        lastName: "",
        email: "",
        password: "",
        username: "",
        confirmPassword: ""
    }
  
    return(
        <div className="mainContainer">
            <Formik
            initialValues = {{firstName: initialData.firstName, lastName: initialData.lastName, username: initialData.username, email: initialData.email,
                 password: initialData.password, confirmPassword: initialData.confirmPassword}}
            validate = {(values) =>{
                const errors = {};
                // !values.lastName ? errors.lastName = 'Required'
                // : values.lastName.length < 2 ? errors.lastName = 'Invalid last name'
                // : !values.password ? errors.password = 'Required'
                // : values.password.length < 8 ? errors.password = 'Password not strong enough'
                // : values.password !== values.confirmPassword ? errors.confirmPassword = 'Password not compatible'
                // : !values.firstName ? errors.firstName = 'Required'
                // : values.firstName.length < 2 ? errors.firstName = 'Invalid first name'
                // : !values.email ? errors.email = 'Required'
                // : !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email) ? errors.email = 'Invalid email address'
                // : errors.confirmPassword = '';
                // return errors;

                if (!values.firstName){
                    errors.firstName = 'Required'
                }
                else if(values.firstName.length < 2){
                    errors.firstName = 'Invalid First Name';
                }
                if (!values.lastName){
                    errors.lastName = 'Required'
                }
                else if (values.lastName.length < 2){
                    errors.lastName = 'Invalid Last Name'
                }
                if (!values.password){
                    errors.password = 'Required'
                }
                else if (values.password.length < 8){
                    errors.password = 'Password not compatible'
                }
                if (!values.username){
                    errors.username = 'Required'
                }
                else if(values.username.length < 2){
                    errors.username = 'Invalid username'
                }
                
                if (!values.email){
                    errors.email = 'Required';
                }else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ){
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleSubmit,
                    handleBlur,
                    isSubmitting,
                }) =>(
            <Form onSubmit={handleSubmit}>
            <div className="form">
                <h1>REGISTER</h1>
                <input type="text" name="firstName" placeholder="first name" onBlur={handleBlur} value={values.firstName} onChange={handleChange} />
                {errors.firstName && touched.firstName && errors.firstName}
                <input type="text" name= "username" placeholder="Enter your username" onBlur={handleBlur} value={values.username} onChange={handleChange}/>
                {errors.username && touched.username && errors.username}
                <input type="text" name="email" placeholder="Enter your email address" onBlur={handleBlur} value={values.email}  onChange={handleChange}/>
                {errors.email && touched.email && errors.email}
                <input type="password" name="password" placeholder="password" id="password" onBlur={handleBlur} value={values.password}  onChange={handleChange}/>
                {errors.password && touched.password && errors.password}
                <input type="password" name="confirmPassword" placeholder="comfirm password" onBlur={handleBlur} id="password" value={values.confirmPassword}  onChange={handleChange}></input>
                {errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}
                <button className="submit"disabled={isSubmitting} type="submit" >submit</button>
            </div>
            </Form>
                )}
            </Formik>
            </div>

      
    )
}
export default myForm;