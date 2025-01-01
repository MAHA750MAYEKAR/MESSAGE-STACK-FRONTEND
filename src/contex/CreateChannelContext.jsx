import { useContext } from "react";
import { useState } from "react";

const CreateChannelContext = useContext();

export const CreateChannelContextProvider = ({ children }) => {
  const [channelName, setChannelName] = useState("");
  const [openChannelModal, setChannelModal] = useState(false);

  return (
    <CreateChannelContext.Provider
      value={{
        channelName,
        setChannelName,
        openChannelModal,
        setChannelModal,
      }}
    >
      {children}
    </CreateChannelContext.Provider>
  );
};

export default CreateChannelContext;
