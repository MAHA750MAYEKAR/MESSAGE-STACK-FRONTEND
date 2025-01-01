import { AuthContextProvider } from './AuthContext';
import CombinedProvider from './CombinedContex';
import { CreateWorkspaceContextProvider } from './createWorkspaceContext';
import { PreferencesContexProvider } from './WorkspacePreferencesModalContex';
import { CreateChannelContextProvider } from './CreateChannelContext';
export const AppContextProvider = CombinedProvider(
  AuthContextProvider,
  CreateWorkspaceContextProvider,
  PreferencesContexProvider,
  CreateChannelContextProvider
);