import "./App.css"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { AppRoutes } from "./routes/AppRoutes";
import { AppContextProvider } from './contex/AppContextProvider';
function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppContextProvider>
          <AppRoutes />
          <Toaster />
        </AppContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
