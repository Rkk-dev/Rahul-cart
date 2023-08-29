import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Login from '../Auth/Login';
import Spinner from '../UI/Spinner';
import LoginTwo from '../Auth/LoginTwo';
import LoggedIn from '../Lottie/LoggedIn';
// import classes from '../../style/LoginPage.module.css';
import {UserAuthContainer, UserAuthSuccessContainer} from '../Styled/UserAuthUI';

const LoginPage = () => {

  const [step, setStep] = useState(1);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [loginStatus, setLoginStatus] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (loginStatus) {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        navigate('/');
      }, 2000);
    }
  }, [loginStatus])

  const stepHandler = (data) => {
    setData(data);
    setStep(2);
  }
  
  const loginSuccessHandler = () => {
    setLoginStatus(true);
  }

  const updateLoadingState = (value) => {
    setLoading(value);
  }
  let content;
  if (step === 1) {
    content = <Login moveToNextStep={stepHandler} updateLoadingState={updateLoadingState} />
  }

  if (step === 2) {
    content = <LoginTwo data={data} updateLoadingState={updateLoadingState} loginSuccess={loginSuccessHandler} />
  }

  return (
    showSuccess ? <UserAuthSuccessContainer>
      <div>
        <LoggedIn />
      </div>
    </UserAuthSuccessContainer> :
      <UserAuthContainer>
        {loading && <Spinner />}
        {!loading && content}
      </UserAuthContainer>
  )
}

export default LoginPage
