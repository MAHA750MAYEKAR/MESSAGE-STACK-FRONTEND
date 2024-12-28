import { useContext } from 'react';

import CreateWorkspaceContext from '@/contex/createWorkspaceContext';

export const useCreateWorkspaceModal = () => {
   return useContext(CreateWorkspaceContext);
};