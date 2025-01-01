import { useMutation } from "@tanstack/react-query";
import { updateWorkspaceRequest } from "@/api/workspace";
import { useAuth } from "../context/useAuth";
export const useUpdateWorkspace = (workspaceId ) => {
  const { auth } = useAuth();
  const {
    isSuccess,
    isPending,
    error,
    mutateAsync: updateWorkspaceMutation,
  } = useMutation({
    mutationFn: ({name}) =>
      updateWorkspaceRequest({ workspaceId, name, token: auth?.token }),
    onSuccess: () => {
      console.log("successfully updated workspace");
    },
    onError: () => {
      console.log("error in updating workspace");
    },
  });

  return {
    isSuccess,
    isPending,
    error,
    updateWorkspaceMutation,
  };
};
