import { useMutation } from '@tanstack/react-query';

import { signUpRequest } from '@/api/auth';
export const useSignUp = () => {
     
      const{isPending,error,isSuccess,mutateAsync:signUpMutation}=useMutation({
            mutationFn:signUpRequest,
            onSuccess:()=>{
                  console.log('successfully sign up');                  
            },
            onError:(error)=>{
                  console.log('failed!! to sign up',error);                  
            }
      });

      return{
            isPending,
            error,
            isSuccess,
            signUpMutation
      };
};