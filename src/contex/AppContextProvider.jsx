import { AuthContextProvider } from './AuthContext';
import CombinedProvider from './CombinedContex';
import { CreateWorkspaceContextProvider } from './createWorkspaceContext';
export const AppContextProvider = CombinedProvider(
  AuthContextProvider,
  CreateWorkspaceContextProvider
);