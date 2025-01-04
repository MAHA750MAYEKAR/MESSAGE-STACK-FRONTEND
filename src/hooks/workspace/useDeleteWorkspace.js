import { useMutation } from '@tanstack/react-query';

import { deleteWorkspaceByIdRequest } from '@/api/workspace';

import { useAuth } from '../context/useAuth';
export const useDeleteWorkspace = (workspaceId) => {
  const { auth } = useAuth();
  const {
    error,
    isSuccess,
    isPending,
    mutateAsync: deleteWorkspaceMutation,
  } = useMutation({
    mutationFn: () =>
      deleteWorkspaceByIdRequest({ workspaceId, token: auth?.token }),
    onSuccess: () => {
      console.log('Successfully deleted workspace');
    },
    onError: () => {
      console.log('error in deleting workspace');
    },
  });

  return {
    error,
    isSuccess,
    isPending,
    deleteWorkspaceMutation,
  };
};
