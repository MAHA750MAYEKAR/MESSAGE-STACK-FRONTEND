import { AuthContextProvider } from './AuthContext';
import CombinedProvider from './CombinedContex';
import { CreateChannelContextProvider } from './CreateChannelContext';
import { CreateWorkspaceContextProvider } from './createWorkspaceContext';
import { PreferencesContexProvider } from './WorkspacePreferencesModalContex';
export const AppContextProvider = CombinedProvider(
  AuthContextProvider,
  CreateWorkspaceContextProvider,
  PreferencesContexProvider,
  CreateChannelContextProvider
);