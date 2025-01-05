import VerificationInput from "react-verification-input";

import { usejoinWorkspaceByJoincode } from "@/hooks/workspace/useJoinWorkspaceByJoincode";
import { useParams } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
export const JoinPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { workspaceId } = useParams();
  const { joinUsingJoincodeMutation } = usejoinWorkspaceByJoincode();
  async function handleAddMemberToWorkspace(joinCode) {
    console.log("adding member");
    await joinUsingJoincodeMutation({ workspaceId, joinCode });

    navigate(`/workspaces/${workspaceId}`);
    toast({
      title: "You have been added to workspace successfully",
      type: "success",
    });

    console.log("added member successfully");
  }
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-slate-300/50">
        <div className="flex justify-center items-center h-full flex-col gap-2.5">
          <h1 className="font-serif font-bold text-3xl">Join Workspace</h1>
          <p className="font-semibold">
            Enter the JoinCode you recieved to join the Workspace
          </p>
          <VerificationInput
            onComplete={handleAddMemberToWorkspace}
            length={6}
            classNames={{
              container: "container w-50 flex justify-center item-center gap-5",
              character:
                "character rounded border-none text-center text-4xl font-bold",
              characterSelected: "bg-muted",
              characterFilled: "character--filled",
            }}
            autoFocus
          />
        </div>
      </div>
    </>
  );
};
