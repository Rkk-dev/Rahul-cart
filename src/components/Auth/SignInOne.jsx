import { useState } from "react";
import { useFormik } from "formik";
import { API_URL } from "../../config";
import { Link } from "react-router-dom";

import {toast} from 'react-toastify';

import AuthCard from "./AuthCard";
import AuthTitle from "./AuthTitle";
import AuthButton from "./AuthButton";
import { UserAuthCard, UserAuthError } from "../Styled/UserAuthUI";
import { BasicButton} from "../Styled/ButtonStyle";

const LoginInstead = ({ message }) => {
  return (
    <section>
      <UserAuthError>
        {message}
        <Link
          to={"/login"}
          style={{
            color: "dodgerblue",
            display: "inline-block",
            padding: "0.5rem 1rem",
          }}
        >
          Try Login
        </Link>
      </UserAuthError>
    </section>
  );
};

const SignInOne = ({ moveToNextStep, loadingHandler }) => {
  const [hasFormError, setHasFormError] = useState(null);

  const validateNewUser = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "Required";
    } else if (values.firstName.length > 10) {
      errors.firstName = "Must be 10 characters or less";
    }
    if (!values.lastName) {
      errors.lastName = "Required";
    } else if (values.lastName.length > 10) {
      errors.lastName = "Must be 10 characters or less";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!values.mobile) {
      errors.mobile = "Required";
    } else if (!/^[0-9]{10}$/.test(values.mobile)) {
      errors.mobile = "Mobile number must have 10 digits";
    }
    return errors;
  };

  const newUserDetails = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
    },
    validate: validateNewUser,
    onSubmit: (values) => {
      loadingHandler(true);
      const userDetails = {
        first_name: values.firstName,
        last_name: values.lastName,
        email: values.email,
        phone: values.mobile,
      };

      const formData = new URLSearchParams();
      for (const key in userDetails) {
        formData.append(key, userDetails[key]);
      }

      const postData = async () => {
        const response = await fetch(API_URL + "Api/registerCustomer", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          throw new Error("Unable to register user");
        }

        const data = await response.json();

        if (data.status) {
          console.log(data);
          moveToNextStep(data);
        } else {
          console.log(data);
          let errorText;
          if (data.data.length === 1) {
            errorText = data.data[0].field + " is already registered!";
          } else if (data.data.length === 2) {
            errorText = "Email and Mobile Number both are already registered!";
          }
          setHasFormError(errorText);
        }
      };

      postData().catch((err) => {
        console.log(err);
      }).finally(() => {
        loadingHandler(false);
      })
    },
  });

  const registerHandler = (event) => {
    event.preventDefault();
    const userDetails = {
      first_name: firstName.current.value,
      last_name: lastName.current.value,
      email: email.current.value,
      phone: mobile.current.value,
    };

    const formData = new URLSearchParams();
    for (const key in userDetails) {
      formData.append(key, userDetails[key]);
    }

    const postData = async () => {

      const response = await fetch(API_URL + "Api/registerCustomer", {
        method: "POST",
        body: formData,
      });


      if (!response.ok) {
        throw new Error("Unable to register user");
      }

      const data = await response.json();

      if (data.status) {
        moveToNextStep(data);
      } else {
        console.log(data);
      }

      
    };

    postData().catch((err) => {
      console.log(err);
    });
  };

  return (
    <UserAuthCard>
      <AuthTitle title="Signup" />
      <form onSubmit={newUserDetails.handleSubmit}>
        <div className="customInput">
          <input
            id="firstName"
            name="firstName"
            type="text"
            value={newUserDetails.values.firstName}
            onChange={newUserDetails.handleChange}
            onBlur={newUserDetails.handleBlur}
            placeholder="First Name *"
          />
        </div>
        <UserAuthError>
          {newUserDetails.touched.firstName &&
            newUserDetails.errors.firstName &&
            newUserDetails.errors.firstName}
        </UserAuthError>
        <div className="customInput">
          <input
            id="lastName"
            name="lastName"
            type="text"
            value={newUserDetails.values.lastName}
            onChange={newUserDetails.handleChange}
            onBlur={newUserDetails.handleBlur}
            placeholder="Last Name *"
          />
        </div>
        <UserAuthError>
          {newUserDetails.touched.lastName &&
            newUserDetails.errors.lastName &&
            newUserDetails.errors.lastName}
        </UserAuthError>
        <div className="customInput">
          <input
            id="email"
            name="email"
            type="email"
            value={newUserDetails.values.email}
            onChange={newUserDetails.handleChange}
            onBlur={newUserDetails.handleBlur}
            placeholder="Email *"
          />
        </div>
        <UserAuthError>
          {newUserDetails.touched.email &&
            newUserDetails.errors.email &&
            newUserDetails.errors.email}
        </UserAuthError>
        <div className="customInput">
          <input
            id="mobile"
            name="mobile"
            type="text"
            value={newUserDetails.values.mobile}
            onChange={newUserDetails.handleChange}
            onBlur={newUserDetails.handleBlur}
            placeholder="Mobile *"
          />
        </div>
        <UserAuthError>
          {newUserDetails.touched.mobile &&
            newUserDetails.errors.mobile &&
            newUserDetails.errors.mobile}
        </UserAuthError>
        {hasFormError && <LoginInstead message={hasFormError} />}
        <BasicButton fullWidth={true} padded={true} >
          Register
        </BasicButton>
      </form>
    </UserAuthCard>
  );
};

export default SignInOne;
