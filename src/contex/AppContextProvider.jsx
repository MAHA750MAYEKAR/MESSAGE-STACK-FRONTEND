import { AuthContextProvider } from './AuthContext';
import CombinedProvider from './CombinedContex';
import { CreateWorkspaceContextProvider } from './createWorkspaceContext';
import { PreferencesContexProvider } from './WorkspacePreferencesModalContex';
export const AppContextProvider = CombinedProvider(
  AuthContextProvider,
  CreateWorkspaceContextProvider,
  PreferencesContexProvider
);