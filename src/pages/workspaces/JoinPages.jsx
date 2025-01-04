import VerificationInput from "react-verification-input";

export const JoinPage = () => {
    async function handleAddMemberToWorkspace() {
       console.log("adding member");
       
        
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
