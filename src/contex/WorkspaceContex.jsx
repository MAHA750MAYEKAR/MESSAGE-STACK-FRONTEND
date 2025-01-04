import { createContext } from 'react';
import { useState } from 'react';
const WorkspaceContex = createContext();

export const WorkspaceContexProvider = ({ children }) => {
 const[currentWorkspace,setCurrentWorkspace]=useState(null);
    return (
      <WorkspaceContex.Provider
        value={{ currentWorkspace, setCurrentWorkspace }}
      >
        {children}
      </WorkspaceContex.Provider>
    );

};


export default WorkspaceContex;