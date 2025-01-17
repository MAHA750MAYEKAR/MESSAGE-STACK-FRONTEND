import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';


export const SideBarItems = ({
    label,
    icon: Icon,
    channelId
}) => {

    const{workspaceId}=useParams();

    return (
      <>
        <Link to={`/workspaces/${workspaceId}/channels/${channelId}`}>
          <Button className="w-full p-1 flex justify-start pl-2 hover:opacity-85 " >
            <Icon />
            <span>{label}</span>
          </Button>
        </Link>
      </>
    );
    
};