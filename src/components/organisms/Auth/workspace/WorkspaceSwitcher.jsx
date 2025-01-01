import { Loader } from 'lucide-react';
import { VscCheckAll } from 'react-icons/vsc';
import { useNavigate,useParams } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger} from '@/components/ui/dropdown-menu';
import { useFetchWorkspace } from '@/hooks/workspace/useFetchWorkspace';
import { useFetchWorkspaceById } from '@/hooks/workspace/useFetchWorkspaceById';
import { useQueryClient } from '@tanstack/react-query';

export const WorkspaceSwitcher = () => {
   const queryClient = useQueryClient();
   const navigate=useNavigate();
   const { workspaceId } = useParams();
   const { isFetching, workspace } = useFetchWorkspaceById(workspaceId);
   const { isFetching: isFetchingWorkspce, workspaces } = useFetchWorkspace();
   //console.log('map workspaces',workspaces);
   


   return (
     <DropdownMenu>
       <DropdownMenuTrigger>
         <Button className="size-10 bg-slate-300/55 font-serif hover:bg-slate-300 text-2xl text-black font-bold hover:scale-110 transition-transform duration-300 ease-in-out mb-2">
           {isFetching ? (
             <Loader className="size-5 animate-spin" />
           ) : (
             workspace?.name.charAt(0).toUpperCase()
           )}
         </Button>
       </DropdownMenuTrigger>
       <DropdownMenuContent>
         <DropdownMenuItem>
           <span className="hover:text-blue-700 font-semibold text-sm/relaxed">{workspace?.name}</span>

           <span>
             <VscCheckAll className="size-5" />
           </span>
         </DropdownMenuItem>
         <DropdownMenuSeparator />

         {isFetchingWorkspce ? (
           <Loader className="size-5 animate-spin" />
         ) : (
           workspaces.map((workspace) => {
             if (workspace._id === workspaceId) {
               return null;
             }
             return (
               <DropdownMenuItem
                 key={workspace._id}
                 onClick={() => {
                  queryClient.invalidateQueries("fetchWorkspaces");
                   navigate(`/workspaces/${workspace._id}`);
                 }}
               >
                 {workspace.name}
               </DropdownMenuItem>
             );
           })
         )}
       </DropdownMenuContent>
     </DropdownMenu>
   );
};