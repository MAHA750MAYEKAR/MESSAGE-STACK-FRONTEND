import { AuthContextProvider } from './AuthContext';
import CombinedProvider from './CombinedContex';
import { CreateChannelContextProvider } from './CreateChannelContext';
import { CreateWorkspaceContextProvider } from './createWorkspaceContext';
import { WorkspaceContexProvider } from './WorkspaceContex';
import { PreferencesContexProvider } from './WorkspacePreferencesModalContex';
export const AppContextProvider = CombinedProvider(
  AuthContextProvider,
  WorkspaceContexProvider,
  CreateWorkspaceContextProvider,
  PreferencesContexProvider,
  CreateChannelContextProvider
);