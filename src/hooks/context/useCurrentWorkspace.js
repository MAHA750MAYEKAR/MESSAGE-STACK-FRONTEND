
import { useContext } from 'react';

import WorkspaceContex from '@/contex/WorkspaceContex';

export const useCurrentWorkspace = () => {
    return useContext(WorkspaceContex);
};