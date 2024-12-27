import axios from '@/config/axiosConfig.js';

export const signUpRequest = async ({ email, password, username }) => {
  try {
    const response = await axios.post('/api/v1/users/signup', {
      email,
      password,
      username,
    });
    return response.data;
  } catch (error) {
    console.error('Sign Up Error:', error);
    throw new Error('Unable to sign up. Please try again later.');
  }
};

export const signInRequest = async ({ email, password }) => {
  try {
    const response = await axios.post('/api/v1/users/signin', {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error('Sign In Error:', error);
    throw new Error('Unable to sign in. Please check your credentials and try again.');
  }
};
