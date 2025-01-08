import { useState, useRef, useEffect } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
export const Editor = () => {
  const [text, setText] = useState("");
  const [isToolbarVisible, setIsToolbarVisible] = useState(false);

  const containerRef = useRef(); // reqd to initialize the editor
  const submitRef = useRef();
  const disabledRef = useRef();
  const defaultValueRef = useRef();
  const quillRef = useRef();
  const placeholderRef = useRef();

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const editorContainer = container.appendChild(
      container.ownerDocument.createElement("div")
    ); // create a new div element and append it to the container

    const options = {
      theme: "snow",
      placeholder: placeholderRef.current,
      modules: {
        toolbar: [
          ["bold", "italic", "underline", "strike"],
          ["link", "image"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["clean"],
        ],
        keyboard: {
          bindings: {
            enter: {
              key: "Enter",
              handler: () => {
                return;
              },
            },
            shift_enter: {
              key: "Enter",
              shiftKey: true,
              handler: () => {
                quill.insertText(quill.getSelection()?.index || 0, "\n"); // insert a new line
              },
            },
          },
        },
      },
    };

    const quill = new Quill(editorContainer, options);
    quillRef.current = quill;
    quillRef.current.focus();
    quill.setContents(defaultValueRef.current);
  }, []);

  return (
    <div className="flex flex-col ml-2 mr-2 mb-1">
      <div className="flex flex-col border border-slate-300 rounded-lg focus-within:shadow-sm m-2  overflow-hidden p-1 transition focus-within: ">
        <div className="bg-slate-50" ref={containerRef} />
      </div>
    </div>
  );
};
