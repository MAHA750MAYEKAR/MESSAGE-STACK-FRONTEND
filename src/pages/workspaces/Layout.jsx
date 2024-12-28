import { WorkspaceSidebar } from '@/components/organisms/Auth/workspace/WorkspaceSidebar';

export const Layout = ({ children }) => {
   return (
     <>
       <div className="h-[100vh]">
         <div className="flex h-full">
           <WorkspaceSidebar />
           {children}
         </div>
       </div>
     </>
   );
   
};