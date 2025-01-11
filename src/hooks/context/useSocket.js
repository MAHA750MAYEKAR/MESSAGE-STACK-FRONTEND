import SocketContext from '@/contex/SocketContext';
import { useContext } from 'react';

export const useSocket = () => {
    return useContext(SocketContext)
    
}
