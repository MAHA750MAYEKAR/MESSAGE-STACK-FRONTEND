import { useMutation } from "@tanstack/react-query";
import { signInRequest } from "@/api/auth";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/context/useAuth";


export const useSignIn = () => {
  const { toast } = useToast();
  const { setAuth } = useAuth();
 
  const {
    isSuccess,
    isPending,
    error,
    mutateAsync: signinMutation,
  } = useMutation({
    mutationFn: signInRequest,
    onSuccess: (response) => {
        console.log("You have successfully signed in!!", response);
      const userObject = JSON.stringify(response.data); //converting it to string
      //when we want to staore data in local storage here response.data we are getting is js object which cannot b stored in local storage so we have convert is to string
      localStorage.setItem("user", userObject); //setting userObject as user in local storage
      //also we have to assign token to user when he signs in
      localStorage.setItem("token", response.data.Token); //so that we can access token directly
    
       setAuth({
        user: response.data,
        token: response.data.Token,
        isLoading: false,
      });
      toast({
        title: "Successfully signed in",
        message: "Welcome back! You have successfully signed in",
        type: "success",
      });
    
    },
    onError: (error) => {
      toast({
        title: "Failed to sign in",
        message: error.message,
        type: "error",
        variant: "destructive",
      });
      console.log("Failed to sign in. Please try again!");
    },
  });

  return {
    error,
    isPending,
    isSuccess,
    signinMutation,
  };
};
