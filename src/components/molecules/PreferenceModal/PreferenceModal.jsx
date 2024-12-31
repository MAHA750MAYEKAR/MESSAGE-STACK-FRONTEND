import { TrashIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { FaPen } from "react-icons/fa6";
import { usePreferencesModal } from "@/hooks/context/usePreferencesModal";
import { useDeleteWorkspace } from "@/hooks/workspace/useDeleteWorkspace";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useEffect } from "react";

export const PreferenceModal = () => {
  const [workspaceId, setWorkspaceId] = useState();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { openPreferences, setOpenPreferences, initialValue, workspace } =
    usePreferencesModal();
 // console.log("workspace......", workspace);

  useEffect(() => {
    setWorkspaceId(workspace?._id);
  }, [workspace]);

  const { deleteWorkspaceMutation } = useDeleteWorkspace(workspaceId); 
  const { toast } = useToast();

  function handleOnOpenChange() {
    setOpenPreferences(false);
  }

  async function handleDeleteWorkspace() {
    try {
      await deleteWorkspaceMutation();
      navigate("/home"); //home page has home component which re triggers fetching of remaining ws after deletion
      queryClient.invalidateQueries("fetchWorkspaces");
      setOpenPreferences(false);

      console.log("deleted workspace");
      toast({
        title: "Workspace deleted successfully",
        type: "success",
      });
    } catch (error) {
      toast({
        title: "Error in deleting workspace",
        type: "error",
      });
    console.log("failed in deleting workspace");
    }
  }
  return (
    <div>
      <Dialog open={openPreferences} onOpenChange={handleOnOpenChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Your Workspace</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              workspace and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
          <div className="px-4 pb-4 flex flex-col gap-y-2">
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
