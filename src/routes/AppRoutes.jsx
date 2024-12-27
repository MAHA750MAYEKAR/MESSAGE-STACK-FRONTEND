import { Route, Routes } from 'react-router-dom';

import { SigninContainer } from '@/components/organisms/Auth/SigninContainer';
import { SignupContainer } from '@/components/organisms/Auth/SignupContainer';
import Auth from '@/pages/auth/Auth';
import { Home } from '@/pages/home/Home';
import { NotFound } from '@/pages/NotFound/NotFound';

import { ProtectedRoute } from './ProtectedRoute';

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
            <Auth>
              <Home/>
            </Auth>
          </ProtectedRoute>
        }
      />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};
