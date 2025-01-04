import { useMutation } from '@tanstack/react-query';

import { addChannelToWorkspceRequest } from '@/api/workspace';

import { useAuth } from '../context/useAuth';
export const useAddChannelToWorkspace = () => {
const {auth}=useAuth();

    const {mutateAsync: addChannelToWorkspaceMutation, isPending, isSuccess, error } = useMutation({
        mutationFn: ({ channelname, workspaceId }) => addChannelToWorkspceRequest({ channelname, workspaceId, token: auth?.token }),
        onSuccess: () => {
            console.log('successfully added channel to workspace');
            
        },
        onError: () => {
            console.log('Error in creating channel in Workspace');
            
        }
});

    return {
        isPending, isSuccess, error,addChannelToWorkspaceMutation
    };
        
        
   
    
};