import { useQueryClient } from '@tanstack/react-query';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useCreateChannelModal } from '@/hooks/context/useCreateChannelModal';
import { useCurrentWorkspace } from '@/hooks/context/useCurrentWorkspace';
import { useToast } from '@/hooks/use-toast';
import { useAddChannelToWorkspace } from '@/hooks/workspace/useAddChaneelToWorkspace';

export const CreateChannelModal = () => {
    const queryClient = useQueryClient();
  const { toast } = useToast();
  const { currentWorkspace } = useCurrentWorkspace();
  const { addChannelToWorkspaceMutation, isPending } =
    useAddChannelToWorkspace();
  const { channelName, setChannelName, openChannelModal, setChannelModal } =
    useCreateChannelModal();
  function handleClose() {
    setChannelModal(false);
  }
 async function handleFormSubmit(e) {
   e.preventDefault();
   console.log('currentWs id', currentWorkspace._id, '&&', channelName);

   
   await addChannelToWorkspaceMutation({
     channelname: channelName,
     workspaceId: currentWorkspace._id,
   });
    toast({
      type: 'success',
      title: 'Channel created successfully',
    });
    queryClient.invalidateQueries(
      `fetchWorkspaceById-${currentWorkspace?._id}`
   );
   handleClose();
  }

  return (
    <Dialog open={openChannelModal} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create channel</DialogTitle>
         
        </DialogHeader>
        <form onSubmit={handleFormSubmit}>
          <Input
            required
            value={channelName}
            onChange={(e) => setChannelName(e.target.value)}
            minLength={3}
            placeholder="Channel name eg Team Announcements"
          />
          <div className="flex justify-end mt-4">
            <Button>Create Channel</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
