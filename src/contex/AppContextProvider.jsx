import CombinedProvider from './CombinedContex';
import { AuthContextProvider } from './AuthContext';
export const AppContextProvider = CombinedProvider(AuthContextProvider);