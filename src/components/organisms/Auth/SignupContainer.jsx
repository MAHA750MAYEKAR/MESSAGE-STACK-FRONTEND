import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSignUp } from '@/hooks/apis/auth/useSignup';

import { SignUpCard } from './SignUpCard';

export const SignupContainer = () => {
  const [validationError, setValidationError] = useState(null);
  const navigate = useNavigate();
  const { isPending, error, isSuccess, signUpMutation } = useSignUp();

  const [signupForm, setSignupForm] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  async function onsignupFormSubmit(e) {
    e.preventDefault();

    if (
      !signupForm.email ||
      !signupForm.confirmPassword ||
      !signupForm.username ||
      !signupForm.password
    ) {
      console.log('all fields are required');
      setValidationError({
        message: 'You need to fill all the required fields!',
      });
      return;
    }

    if (signupForm.password !== signupForm.confirmPassword) {
      console.log('Failed!!  Password does not match,Please try again');
      setValidationError({
        message: 'Failed!!  Password does not match,Please try again',
      });
      return;
    }
    setValidationError(null);
    console.log('issuccess', isSuccess);

    console.log('Form Submitted successfully', signupForm);

    await signUpMutation({
      email: signupForm.email,
      password: signupForm.password,
      username: signupForm.username,
    });
  }
  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => navigate('/auth/signin'), 3000);
    }
  }, [isSuccess, navigate]);

  return (
    <SignUpCard
      signupForm={signupForm}
      setSignupForm={setSignupForm}
      validationError={validationError}
      onsignupFormSubmit={onsignupFormSubmit}
      isPending={isPending}
      error={error}
      isSuccess={isSuccess}
    />
  );
};
