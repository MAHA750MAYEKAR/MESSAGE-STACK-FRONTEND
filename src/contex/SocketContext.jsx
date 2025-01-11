import { io } from "socket.io-client";
import { createContext } from "react";
import { useState } from 'react';

const SocketContext = createContext();

export const socketContextProvider = ({ children }) => {
    const [currentChannel,setCurrentChannel]=useState(null)

    const socket = io(import.meta.env.VITE_BACKEND_SOCKET_URL);
    async function joinChannel(channelId) {
        socket.emit("joinChannel", { channelId }, (data) => {
            console.log("successfully joined the channel", data);
            setCurrentChannel(data?.data)//channelId
            
        });
    }

    return (
      <SocketContext.Provider
        value={{ socket, joinChannel, currentChannel, setCurrentChannel }}
      >
        {children}
      </SocketContext.Provider>
    );
};

export default SocketContext;
