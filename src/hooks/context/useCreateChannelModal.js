import { useContext } from 'react';

import CreateChannelContext from '@/contex/CreateChannelContext';

export const useCreateChannelModal = () => {
    return useContext(CreateChannelContext);
};