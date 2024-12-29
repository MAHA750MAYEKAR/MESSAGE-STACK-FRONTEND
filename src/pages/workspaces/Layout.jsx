import { WorkspaceSidebar } from '@/components/organisms/Auth/workspace/WorkspaceSidebar';
import { WorkspaceNavbar } from '@/components/organisms/Auth/workspace/WorkspaceNavbar';

export const Layout = ({ children }) => {
   return (
     <>
       <div className="h-[100vh]">
         <WorkspaceNavbar/>
         <div className="flex h-[calc(100vh-40px)]">
           <WorkspaceSidebar />
           {children}
         </div>
       </div>
     </>
   );
   
};