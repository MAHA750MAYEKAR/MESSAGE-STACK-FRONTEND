import { useQuery } from '@tanstack/react-query';

import { fetchWorkspaceByIdRequest } from '@/api/workspace';

import { useAuth } from '../context/useAuth';

export const useFetchWorkspaceById = (id) => {

   const{auth}=useAuth();
   const { isFetching,isSuccess ,data:workspace,error} = useQuery({
      queryFn: () => fetchWorkspaceByIdRequest({ workspaceId: id, token: auth?.token }),
      queryKey: [`fetchWorkspaceById-${id}`],
       staleTime:10000
   });
   return {
      isFetching,isSuccess ,workspace,error
   };
};