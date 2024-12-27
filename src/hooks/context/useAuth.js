import { useContext } from 'react';

import AuthContext from '@/contex/AuthContext';

export const useAuth = () => {//this will return Auth which has token and user
    return useContext(AuthContext);
};