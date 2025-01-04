import { InfoIcon } from 'lucide-react';
import { Search } from 'lucide-react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { useCurrentWorkspace } from '@/hooks/context/useCurrentWorkspace';
import { useFetchWorkspaceById } from '@/hooks/workspace/useFetchWorkspaceById';

export const WorkspaceNavbar = () => {
   const {setCurrentWorkspace}=useCurrentWorkspace();
   const { workspaceId } = useParams();
   const { workspace, isFetching } = useFetchWorkspaceById(workspaceId);
      useEffect(() => {
        if (workspace) {
          setCurrentWorkspace(workspace);
        }
      }, [workspace, setCurrentWorkspace]);
  
  if (isFetching) {
      return (
        <div className="h-[40px]">
          <h1>Loading...</h1>
        </div>
      );
   }
   console.log('workspace in navbar',workspace);
   

   return (
     <>
       <nav>
         <div className="h-[40px] bg-[#ce1f5b] flex items-center px-4">
           <div className="absolute left-1/2 transform -translate-x-1/2">
             <Button
               size="sm"
               className="bg-gray-700/15 hover:bg-accent/15 justify-center h-7 px-2"
             >
               <Search />
               <span className="font-serif text-base">{workspace.name}</span>
             </Button>
           </div>

           <div className="ml-auto   ">
             <Button className="hover:bg-slate-700 size-10 text-white hover:scale-110 transition-transform duration-300 ease-in-out h-7 px-3">
               <InfoIcon />
             </Button>
           </div>
         </div>
       </nav>
     </>
   );


};