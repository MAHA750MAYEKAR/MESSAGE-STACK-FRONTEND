import { useEffect } from 'react';

import { UserButton } from '@/components/atom/UserButton/UserButton';
import { useFetchWorkspace } from '@/hooks/workspace/useFetchWorkspace';

export const Home = () => {
    const { workspaces, isFetching } = useFetchWorkspace();
    
    useEffect(() => {
        if (isFetching) return;
        console.log('workspaces in home page',workspaces);
        
         if (workspaces.length=== 0 || !workspaces) {
           console.log('No workspaces found, creating one');
         }
    
},[isFetching,workspaces]);

    return (

        <>
            <div>Home----back</div>
          <UserButton />     
        
        </>
    );
    
};