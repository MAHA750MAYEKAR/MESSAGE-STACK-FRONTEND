import { BellIcon, HomeIcon, MessageSquareIcon, MoreHorizontalIcon } from 'lucide-react';

import { UserButton } from '@/components/atom/UserButton/UserButton';
import { SidebarButton } from '@/components/molecules/sidebarButton/SidebarButton';

import { WorkspaceSwitcher } from './WorkspaceSwitcher';

export const WorkspaceSidebar = () => {
   return (
     <>
       <aside className="w-[80px] h-[cal(100vh-40px)] bg-[#ce1f5b] flex flex-col gap-4 px-4 py-2">
         <WorkspaceSwitcher/>
         <SidebarButton Icon={HomeIcon} label="Home" />
         <SidebarButton Icon={MessageSquareIcon} label="DMs" />
         <SidebarButton Icon={BellIcon} label="Notifications" />
         <SidebarButton Icon={MoreHorizontalIcon} label="More" />
         <div className="flex flex-col items-center justify-center mt-auto mb-5 gap-y-1 ">
           <UserButton />
         </div>
       </aside>
     </>
   );
   
};