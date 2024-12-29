import { Loader } from 'lucide-react';
import { useNavigate,useParams } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useFetchWorkspaceById } from '@/hooks/workspace/useFetchWorkspaceById';


export const WorkspaceSwitcher = () => {
   const { workspaceId } = useParams();
   const { isFetching, workspace } = useFetchWorkspaceById(workspaceId);


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
         <DropdownMenuItem>Profile</DropdownMenuItem>
         <DropdownMenuItem>Billing</DropdownMenuItem>
         <DropdownMenuItem>Team</DropdownMenuItem>
         <DropdownMenuItem>Subscription</DropdownMenuItem>
       </DropdownMenuContent>
     </DropdownMenu>
   );
};