import { useMutation } from '@tanstack/react-query';
import { createWorkspacerequest } from '@/api/workspace';
import { useAuth } from '../context/useAuth';

export const useCreateWorkspace = () => {
  const { auth } = useAuth();
  const {
    isPending,
    error,
    isSuccess,
    mutateAsync: createWorkspaceMutation,
  } = useMutation({
    mutationFn: (data) =>
      createWorkspacerequest({ ...data, token: auth?.token }), //way how we can add extra data to mutatn fn i.e token we are adding
    onSuccess: (data) => {
      console.log('successfully created workspace', data);
    },
    onError: (error) => {
      console.log('failed to create workspace', error);
    },
  });
  return {
    isPending,
    error,
    isSuccess,
    createWorkspaceMutation,
  };
};
