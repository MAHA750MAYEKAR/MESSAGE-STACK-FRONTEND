import { CopyCheckIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';

export const WorkspaceInviteModal = ({
  joincode,
  openInvite,
  setOpenInvite,
}) => {
    const{toast}=useToast();

    async function handleCopy() {
        const inviteLink = `${window.location.origin}/join/${joincode}`;
        await navigator.clipboard.writeText(inviteLink);
         toast({
           type: 'success',
           title: 'Link Copied to Clipboard',
         });
    }
  return (
    <>
      <Dialog open={openInvite} onOpenChange={setOpenInvite}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Invite people To my Workspace</DialogTitle>
            <DialogDescription>
              Use this Joincode below to Invite people to your Workspace
            </DialogDescription>
          </DialogHeader>
          <p className='text-2xl text-center text-indigo-500'>{joincode}</p>
          <Button onClick={handleCopy}>
            copy the link
            <CopyCheckIcon />
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};
