import { AlertTriangleIcon, HashIcon, Loader, MessageSquareCodeIcon, SendHorizonalIcon } from 'lucide-react';
import { useParams } from 'react-router-dom';

import { SideBarItems } from '@/components/atom/SidebarItems/SideBarItems';
import { WorkspacePanelHeader } from '@/components/molecules/WorkspacePanalHeader/WorkSpacePanelHeader';
import { WorkspacePanelSection } from '@/components/molecules/WorkspacePanalHeader/WorkspacePanelSection';
import { useCreateChannelModal } from '@/hooks/context/useCreateChannelModal';
import { useFetchWorkspaceById } from '@/hooks/workspace/useFetchWorkspaceById';


export const WorkspacePanel = () => {
  const { setChannelModal } = useCreateChannelModal();
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
       <div className="flex flex-col px-2 mt-3 gap-2">
         <SideBarItems
           label="Threads"
           icon={MessageSquareCodeIcon}
           id="threads"
           variant="active"
         />
         <SideBarItems
           label="Drafts & Sends"
           icon={SendHorizonalIcon}
           id="drafts"
           variant="default"
         />
       </div>
       <WorkspacePanelSection
         label={'Channels'}
         onIconClick={() => setChannelModal(true)}
       >
         {workspace?.channels?.map((channel) => {
           return (
             <SideBarItems
               key={channel.channelId}
               label={channel.name}
               channelId={channel.channelId}
               icon={HashIcon}
             />
           );
         })}
       </WorkspacePanelSection>
     </div>
   );
};