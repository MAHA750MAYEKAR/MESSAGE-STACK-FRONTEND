import { useMutation } from '@tanstack/react-query'
import { addMemberToWorkspaceRequest } from '@/api/workspace'
import { useAuth } from '../context/useAuth'
export const useAddMemberToWorkspace = (workspaceId) => {
    const{auth}=useAuth()
    const {error,isPending,isSuccess,mutateAsync:addMemberToWorkspaceMutation } = useMutation({
        mutationFn: ({workspaceId}) => addMemberToWorkspaceRequest({ workspaceId, token: auth?.token }),
        onSuccess: (data) => {
            console.log("member added successfully to ws",data);
            
        },
        onError: () => {
            console.log("failed ..error in adding member to ws");
            
        }
 })

    return {
        error,isPending,isSuccess,addMemberToWorkspaceMutation 
    }
}