import { useMutation } from '@tanstack/react-query';

import { signUpRequest } from '@/api/auth';
export const useSignUp = () => {
     
      const{isPending,error,isSuccess,mutate:signUpMutation}=useMutation({
            mutationFn:signUpRequest,
            onSuccess:()=>{
                  console.log('successfully sign up',data);
                  
            },
            onError:()=>{
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