import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSignIn } from '@/hooks/apis/auth/useSignin';

import { SignInCard } from './SignInCard';


export const SigninContainer = () => {
  const navigate=useNavigate();
  const [signInForm, setSigninForm] = useState({
    email: '',
    password: '',
  });
  const [validationError, setValidationError] = useState(null);
  const { error, isPending, isSuccess, signinMutation } = useSignIn();

  async function onSubmitSignin(e) {
    e.preventDefault();
    console.log('signinform',signInForm);
    
    if (!signInForm.email || !signInForm.password) {
      setValidationError({ message: 'Please fill all the required fields!' });
      return;
    }
    setValidationError(null);
    signinMutation({
      email: signInForm.email,
      password: signInForm.password,
    });
  }
useEffect(() => {
  console.log('useEffect isSuccess:', isSuccess);
  if (isSuccess) {
    setTimeout(() => {
      navigate('/home');
    }, 3000);
  }
}, [isSuccess, navigate]);


  return (
    <SignInCard
      signInForm={signInForm}
      setSigninForm={setSigninForm}
      error={error}
      isSuccess={isSuccess}
      isPending={isPending}
      onSubmitSignin={onSubmitSignin}
      validationError={validationError}
    />
  );
};
