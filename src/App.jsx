import "./App.css";

import { Route, Routes } from "react-router-dom";
import { SignupContainer } from "./components/organisms/Auth/SignupContainer";
import { SignInCard } from "./components/organisms/Auth/signInCard";
import Auth from "./pages/auth/Auth";
import { NotFound } from "./pages/NotFound/NotFound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route
            path="/auth/signin"
            element={
              <Auth>
                <SignInCard />
              </Auth>
            }
          />
          <Route
            path="/auth/signup"
            element={
              <Auth>
                <SignupContainer />
              </Auth>
            }
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </QueryClientProvider>
    </>
  );
}

export default App;
