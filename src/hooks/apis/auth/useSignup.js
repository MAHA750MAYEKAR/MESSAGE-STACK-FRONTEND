import { useMutation } from "@tanstack/react-query";

import { signUpRequest } from "@/api/auth";
import { useToast } from "@/hooks/use-toast";

export const useSignUp = () => {
  const { toast } = useToast();

  const {
    isPending,
    error,
    isSuccess,
    mutateAsync: signUpMutation,
  } = useMutation({
    mutationFn: signUpRequest,
    onSuccess: () => {
      toast({
        title: "Successfully signed up",
        message: "You will be redirected to the login page in a few seconds",
        type: "success",
      });
      console.log("successfully sign up");
    },
    onError: (error) => {
      toast({
        title: "Failed to sign up",
        message: error.message,
        type: "error",
        variant: "destructive",
      });
      console.log("failed!! to sign up", error);
    },
  });

  return {
    isPending,
    error,
    isSuccess,
    signUpMutation,
  };
};
