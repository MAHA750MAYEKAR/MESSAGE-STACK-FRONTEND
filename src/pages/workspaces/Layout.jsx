import { WorkspaceNavbar } from '@/components/organisms/Auth/workspace/WorkspaceNavbar';
import { WorkspacePanel } from '@/components/organisms/Auth/workspace/WorkspacePanel';
import { WorkspaceSidebar } from '@/components/organisms/Auth/workspace/WorkspaceSidebar';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
 

export const Layout = ({ children }) => {
   return (
     <>
       <div className="h-[100vh]">
         <WorkspaceNavbar />
         <div className="flex h-[calc(100vh-40px)]">
           <WorkspaceSidebar />
           <ResizablePanelGroup
             direction="horizontal"
             autoSaveId={'workspace-resize'}
           >
             <ResizablePanel
               minSize={15}
               defaultSize={20}
               className="bg-slate-300/85"
             >
              <WorkspacePanel/>
             </ResizablePanel>

             <ResizableHandle withHandle />
             <ResizablePanel minSize={20}>{children}</ResizablePanel>
           </ResizablePanelGroup>

         
         </div>
       </div>
     </>
   );
   
};