import { useQuery } from '@tanstack/react-query';

import { fetchWorkspaceRequest } from '@/api/workspace';

import { useAuth } from '../context/useAuth';


export const useFetchWorkspace = () => {
    const{auth}=useAuth();

    const { isError,isSuccess,isFetching,data:workspaces} = useQuery({
        queryFn:()=>fetchWorkspaceRequest({ token: auth?.token }),
        queryKey: ['fetchWorkspaces'],
        staleTime: 30000
    });
    //console.log('workspaces in useq',workspaces);
    

    return {
        isError,isSuccess,isFetching,workspaces
        
    };
    
};