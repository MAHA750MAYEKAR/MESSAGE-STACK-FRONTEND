import { useState } from 'react';
import { MdCreate } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,  
  DialogHeader,
  DialogTitle, 
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useCreateWorkspaceModal } from '@/hooks/context/useCreateWorkspaceModal';
import { useCreateWorkspace } from '@/hooks/workspace/useCreateWorkspace';

export const CreateWorkspaceModal = () => {
  const { openWorkspaceModal, setOpenWorkspaceModal } =
    useCreateWorkspaceModal();
  const [workspaceName, setWorkspaceName] = useState();
   const { isPending, createWorkspaceMutation } = useCreateWorkspace();
   const navigate=useNavigate();
   

  function handleClosIingModal() {
    setOpenWorkspaceModal(false);
   }
   
   async function handleFormSubmit(e) {
      e.preventDefault();
      try {
         const workspaceCreated =await createWorkspaceMutation({
           name: workspaceName,
         });
        console.log('successfully created workspace in modal', workspaceCreated.data);
        
        const Workspace = workspaceCreated.data;
        console.log('workspace',Workspace);        
         navigate(`/workspaces/${Workspace._id}`);
         
         
      } catch (error) {
         console.log('failed!! not able to create workspace',error);      
         
      }
      finally {
         setWorkspaceName('');
         setOpenWorkspaceModal(false);
      }
      
   }
  return (
    <Dialog open={openWorkspaceModal} onOpenChange={handleClosIingModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex gap-2">
            Create new Workspace
            <MdCreate className='size-5'/>
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleFormSubmit}>
          <Input
            disabled={isPending}
            required
            placeholder="Enter the name of workspace e.g Myworkspace..."
            value={workspaceName}
            onChange={(e) => setWorkspaceName(e.target.value)}
            minLength={4}
          />
          <div className="flex justify-end mt-6">
            <Button type="submit" disabled={isPending}>
              Create Workspace
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
