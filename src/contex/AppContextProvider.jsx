import { AuthContextProvider } from './AuthContext';
import CombinedProvider from './CombinedContex';
export const AppContextProvider = CombinedProvider(AuthContextProvider);