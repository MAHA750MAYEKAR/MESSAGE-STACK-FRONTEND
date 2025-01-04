import { CopyCheckIcon, Link } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { useParams } from 'react-router-dom';

export const WorkspaceInviteModal = ({
  joincode,
  openInvite,
  setOpenInvite,
}) => {
  const{workspaceId}=useParams()
    const{toast}=useToast();

    async function handleCopy() {
        const inviteLink = `${joincode}`;
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
          <p className="text-2xl text-center font-bold">{joincode}</p>
          <Button onClick={handleCopy}>
            copy the link
            <CopyCheckIcon />
          </Button>

          <a
            href={`/workspaces/join/${workspaceId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 italic flex gap-1.5 hover:underline"
          >
            <Link size="20" />
            <span> Click here to Redirect to JoinPage</span>
          </a>
        </DialogContent>
      </Dialog>
    </>
  );
};
