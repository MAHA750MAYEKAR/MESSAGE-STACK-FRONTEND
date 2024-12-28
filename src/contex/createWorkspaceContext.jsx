import { createContext } from 'react';
import { useState } from 'react';

const CreateWorkspaceContext = createContext();

export const CreateWorkspaceContextProvider = ({ children }) => {
   const[openWorkspaceModal,setOpenWorkspaceModal]=useState(false);
   return (
      <CreateWorkspaceContext.Provider value={{ openWorkspaceModal, setOpenWorkspaceModal }}>
         {children}
      </CreateWorkspaceContext.Provider>
   );
};




export default CreateWorkspaceContext;