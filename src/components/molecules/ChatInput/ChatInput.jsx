import { Editor } from "@/components/atom/Editor/Editor";

export const ChatInput = () => {
  async function handleSubmit({body}) {
    console.log("body", body);
    
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
