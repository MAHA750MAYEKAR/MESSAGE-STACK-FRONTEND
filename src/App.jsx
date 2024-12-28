import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { Modals } from './components/organisms/Auth/modals/Modals';
import { AppContextProvider } from './contex/AppContextProvider';
import { AppRoutes } from './routes/AppRoutes';
function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppContextProvider>
              <AppRoutes />
              <Modals/>
        </AppContextProvider>
        <Toaster />
      </QueryClientProvider>
    </>
  );
}

export default App;
