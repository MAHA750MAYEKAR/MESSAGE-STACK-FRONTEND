import { io } from "socket.io-client";
import { createContext } from "react";

const SocketContext = createContext();

export const socketContextProvider = ({ children }) => {

const socket = io("ws://localhost:5000");

    return <SocketContext.Provider value={{socket}}>
        {children}
    </SocketContext.Provider>;
};

export default SocketContext;
