import { Route, Routes } from 'react-router-dom';

import { SigninContainer } from '@/components/organisms/Auth/SigninContainer';
import { SignupContainer } from '@/components/organisms/Auth/SignupContainer';
import Auth from '@/pages/auth/Auth';
import { Home } from '@/pages/home/Home';
import { NotFound } from '@/pages/NotFound/NotFound';
import { Layout } from '@/pages/workspaces/Layout';
import { JoinPage } from '@/pages/workspaces/JoinPages';
import { ProtectedRoute } from './ProtectedRoute';
import { Channel } from '@/pages/workspaces/channel';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/auth/signin"
        element={
          <Auth>
            <SigninContainer />
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
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/workspaces/:workspaceId"
        element={
          <ProtectedRoute>
            <Layout>
              <h1>workspace</h1>
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/workspaces/:workspaceId/channels/:channelId"
        element={
          <ProtectedRoute>
            <Layout>
             <Channel/>
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route path="/workspaces/join/:workspaceId" element={<JoinPage />} />

      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};
