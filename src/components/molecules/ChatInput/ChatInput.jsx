import { Editor } from "@/components/atom/Editor/Editor";

export const ChatInput = () => {
  return (
    <div>
      <Editor
        placeholder="Type a message..."
        onSubmit={() => {}}
        onCancel={() => {}}
        disabled={false}
        de
      />
    </div>
  );
};
