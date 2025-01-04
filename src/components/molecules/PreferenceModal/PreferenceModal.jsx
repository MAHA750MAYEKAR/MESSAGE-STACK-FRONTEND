import { useQueryClient } from '@tanstack/react-query';
import { TrashIcon } from 'lucide-react';
import { useState } from 'react';
import { useEffect } from 'react';
import { FaPen } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { usePreferencesModal } from '@/hooks/context/usePreferencesModal';
import { useToast } from '@/hooks/use-toast';
import { useDeleteWorkspace } from '@/hooks/workspace/useDeleteWorkspace';
import { useUpdateWorkspace } from '@/hooks/workspace/useUpdateWorkspace';

export const PreferenceModal = () => {
  const [renameWorkspace, setRenameWorkspace] = useState();
  const [editOpen, setEditOpen] = useState(false);
  const [workspaceId, setWorkspaceId] = useState(null);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { openPreferences, setOpenPreferences, initialValue, workspace } =
    usePreferencesModal();
  // console.log("workspace......", workspace);
  const { isPending, updateWorkspaceMutation } =
    useUpdateWorkspace(workspaceId);
  useEffect(() => {
    setWorkspaceId(workspace?._id);
    setRenameWorkspace(workspace?.name);
  }, [workspace]);

  const { deleteWorkspaceMutation } = useDeleteWorkspace(workspaceId);
  const { toast } = useToast();

  function handleOnOpenChange() {
    setOpenPreferences(false);
  }

  async function handleDeleteWorkspace() {
    try {
      if (isPending) return;
      await deleteWorkspaceMutation();
      queryClient.invalidateQueries('fetchWorkspaces');
      navigate('/home'); //home page has home component which re triggers fetching of remaining ws after deletion

      setOpenPreferences(false);

      console.log('deleted workspace');
      toast({
        title: 'Workspace deleted successfully',
        type: 'success',
      });
    } catch (error) {
      toast({
        title: 'Error in deleting workspace',
        type: 'error',
      });
      console.log('failed in deleting workspace');
    }
  }

  async function handleFormSubmit(e) {
    e.preventDefault();
    try {
      await updateWorkspaceMutation({ name: renameWorkspace });
      queryClient.invalidateQueries(`fetchWorkspaceById-${workspace?._id}`);

      setOpenPreferences(false);
      toast({
        title: 'Workspace updated successfully',
        type: 'success',
      });
    } catch (error) {
      console.log('Error in updating workspace', error);
      toast({
        title: 'Error in updating workspace',
        type: 'error',
      });
    }
  }
  return (
    <div>
      <Dialog open={openPreferences} onOpenChange={handleOnOpenChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Your Workspace</DialogTitle>
            <DialogDescription className="text-red-600">
              This action cannot be undone. This will permanently delete your
              workspace and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>

          <Dialog open={editOpen} onOpenChange={setEditOpen}>
            <DialogTrigger>
              <div className="px-5 py-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-50 ">
                <p className="font-xs mb-2">-Your Workspace Name</p>
                <Separator />
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-sm pl-2 pt-2 flex gap-3 mt-2">
                    <FaPen className="mt-1" />
                    {initialValue}
                  </p>
                  <p className="text-sm font-semibold hover:underline">Edit</p>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Rename Your Workspace</DialogTitle>
              </DialogHeader>
              <form className="space-4" onSubmit={handleFormSubmit}>
                <Input
                  className="h-10 mt-1"
                  required
                  value={renameWorkspace}
                  onChange={(e) => setRenameWorkspace(e.target.value)}
                  minLength={3}
                  autoFocus
                  disabled={isPending}
                  placeholder={initialValue}
                />
                <DialogFooter className="p-4 ">
                  <DialogClose>
                    <Button variant="outline" disabled={isPending}>
                      Cancel
                    </Button>
                  </DialogClose>
                  <Button type="submit" disabled={isPending}>
                    Save
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>

          <div className="px-4 pb-4 flex flex-col gap-y-2">
            <button
              className="flex items-center gap-x-2 px-5 py-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-50"
              onClick={handleDeleteWorkspace}
            >
              <TrashIcon className="size-5  text-red-600" />
              <p className="text-xs text-red-600 font-semibold ">
                Delete Workspace
              </p>
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
