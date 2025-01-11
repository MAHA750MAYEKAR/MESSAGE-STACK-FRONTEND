import { AuthContextProvider } from './AuthContext';
import CombinedProvider from './CombinedContex';
import { CreateChannelContextProvider } from './CreateChannelContext';
import { CreateWorkspaceContextProvider } from './createWorkspaceContext';
import { WorkspaceContexProvider } from './WorkspaceContex';
import { PreferencesContexProvider } from './WorkspacePreferencesModalContex';
import { socketContextProvider } from './SocketContext';
export const AppContextProvider = CombinedProvider(
   socketContextProvider,
  AuthContextProvider,
  WorkspaceContexProvider,
  CreateWorkspaceContextProvider,
  PreferencesContexProvider,
  CreateChannelContextProvider
);