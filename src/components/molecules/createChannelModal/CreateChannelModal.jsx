import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useCreateChannelModal } from '@/hooks/context/useCreateChannelModal';

export const CreateChannelModal = () => {
  const { channelName, setChannelName, openChannelModal, setChannelModal } =
    useCreateChannelModal();
  function handleClose() {
    setChannelModal(false);
  }
  function handleFormSubmit(e) {
    e.preventDefault();
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
