import { useContext } from 'react';

import WorkspacePreferencesModalContext from '@/contex/WorkspacePreferencesModalContex';

export const usePreferencesModal = () => {
  return useContext(WorkspacePreferencesModalContext);
};
