import { AlertTriangleIcon, Loader, MessageCircleCodeIcon } from 'lucide-react';
import { useParams } from 'react-router-dom';

import { SideBarItems } from '@/components/atom/SidebarItems/SideBarItems';
import { WorkspacePanelHeader } from '@/components/molecules/WorkspacePanalHeader/WorkSpacePanelHeader';
import { useFetchWorkspaceById } from '@/hooks/workspace/useFetchWorkspaceById';


export const WorkspacePanel = () => {

   const { workspaceId } = useParams();
   const { isFetching, isSuccess, workspace } = useFetchWorkspaceById(workspaceId);
   
   if (isFetching) {
      return (
        <div className="flex justify-center items-center h-full w-full">
          <Loader className="animate-spin delay-75 size-10 text-black" />
        </div>
      );
   }

   if (!isSuccess) {
     return (
       <div className="flex justify-center items-center h-full w-full">
         <AlertTriangleIcon className="size-6 text-black" />
         <span className="p-2">Something went wrong</span>
       </div>
     );
   }
   

   return (
     <div>
       <WorkspacePanelHeader workspace={workspace} />
       <div className="flex flex-col p-2">
         <SideBarItems
           label="threads"
           channelId="threads"
           icon={MessageCircleCodeIcon}
         />
       </div>
     </div>
   );
};