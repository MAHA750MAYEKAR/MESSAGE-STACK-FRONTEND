import { Editor } from "@/components/atom/Editor/Editor";
import { useAuth } from "@/hooks/context/useAuth";
import { useCurrentWorkspace } from "@/hooks/context/useCurrentWorkspace";
import { useSocket } from "@/hooks/context/useSocket";

export const ChatInput = () => {
  const { currentWorkspace } = useCurrentWorkspace();
  const { socket, currentChannel } = useSocket();
  const { auth } = useAuth();
  async function handleSubmit({ body }) {
    console.log("body", body);
    socket?.emit(
      "NewMessage",
      {
        channelId: currentChannel,
        body,
        senderID: auth?.user?._id,
        workspaceId: currentWorkspace?._id,
      },
      (data) => {
        console.log("message sent", data);
      }
    );
  }
  return (
    <div>
      <Editor
        placeholder="Type a message..."
        onSubmit={handleSubmit}
        onCancel={() => {}}
        disabled={false}
      />
    </div>
  );
};
