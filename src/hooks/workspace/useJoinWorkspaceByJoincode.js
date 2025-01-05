import { useMutation } from '@tanstack/react-query'
import { joinWorkspaceByJoincodeRequest } from '@/api/workspace'
import { useAuth } from '../context/useAuth'
export const usejoinWorkspaceByJoincode = () => {
    const{auth}=useAuth()
    const { isPending,isSuccess,error,mutateAsync:joinUsingJoincodeMutation} = useMutation({
        mutationFn: ({ workspaceId, joinCode }) => joinWorkspaceByJoincodeRequest({ workspaceId, joinCode, token: auth.token }),
        onSuccess: () => {
            console.log("member joined ws successfully");
            
        },
        onError: () => {
            console.log("failed  in joining ws by joincode");
            
        }
})

    return {
        isPending,isSuccess,error,joinUsingJoincodeMutation
         
     }
 }