import { useState } from "react";
import { useFormik } from "formik";

const NewUser = () => {
    const [showOTP, setShowOTP] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [registerSuccessful, setRegisterSuccessful] = useState(false);

    const errorStyle = {
        color: 'red',
        fontWeight: 'bold',
    }

    const validateUserDetails = values => {
        const errors = {};
        if (!values.firstName) {
          errors.firstName = 'Required';
        } else if (values.firstName.length > 10) {
          errors.firstName = 'Must be 10 characters or less';
        }
      
        if (!values.lastName) {
          errors.lastName = 'Required';
        } else if (values.lastName.length > 20) {
          errors.lastName = 'Must be 20 characters or less';
        }
      
        if (!values.email) {
          errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }

        if(!values.phone) {
            errors.phone = 'Required';
        }else if(values.phone.trim().length < 10 && values.phone.trim().length > 10) {
            errors.phone = 'Mobile Number must have 10 digits';
        }
      
        return errors;
      };

    const userDetails = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validate: validateUserDetails
    });

    const userDetailsFormComponent = (
        <form onSubmit={userDetails.handleSubmit}>
            <div>
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    onChange={userDetails.handleChange}
                    value={userDetails.values.firstName}
                    onBlur={userDetails.handleBlur}
                />
                {userDetails.touched.firstName && userDetails.errors.firstName && <div className={errorStyle}> {userDetails.errors.firstName} </div> }
            </div>
            <div>
                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    onChange={userDetails.handleChange}
                    value={userDetails.values.lastName}
                    onBlur={userDetails.handleBlur}
                />
            </div>
            <div>
                <label htmlFor="email">Email Id</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={userDetails.handleChange}
                    value={userDetails.values.email}
                />
            </div>
            <div>
                <label htmlFor="phone">Phone : </label>
                <input
                    id="phone"
                    name="phone"
                    type="text"
                    onChange={userDetails.handleChange}
                    value={userDetails.values.phone}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );


    return userDetailsFormComponent;

}

export default NewUser;