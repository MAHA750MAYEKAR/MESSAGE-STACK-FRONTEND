import { useAuth } from '@/hooks/context/useAuth'
import { Navigate } from 'react-router-dom'
import { SpinnerDotted } from "spinners-react";

export const ProtectedRoute = ({ children }) => {
    const { auth } = useAuth()
    
    if (auth.isLoading) {
        return (
          <>
            <div className='flex justify-center items-center h-screen bg-slate-100'>
              <SpinnerDotted />;
            </div>
            ;
          </>
        );
        
        
        
        
    }

    if (!auth.token || !auth.user) {
        return <Navigate to="/auth/signin"/>
    }
    //if its not loading && token n user is present thn return route=children
    return children
}