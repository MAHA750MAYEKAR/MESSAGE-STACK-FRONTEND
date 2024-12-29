import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserButton } from '@/components/atom/UserButton/UserButton';
import { useFetchWorkspace } from '@/hooks/workspace/useFetchWorkspace';

export const Home = () => {
  const { workspaces, isFetching } = useFetchWorkspace();
  const navigate = useNavigate();

  useEffect(() => {
    if (isFetching) return;
    console.log('workspaces in home page', workspaces);

    if (workspaces.length === 0 || !workspaces) {
      console.log('No workspaces found, creating one');
    } else {
      navigate(`/workspaces/${workspaces[0]._id}`);
    }
  }, [isFetching, workspaces]);

  return (
    <>
      <div>Home----back</div>
      <UserButton />
    </>
  );
};
