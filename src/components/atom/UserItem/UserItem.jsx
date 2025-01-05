import { Button } from '@/components/ui/button'
import { useCurrentWorkspace } from '@/hooks/context/useCurrentWorkspace';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from 'react-router-dom';



export const UserItem = ({
    id,
    img,
    username
}) => {
    const { currentWorkspace } = useCurrentWorkspace()
    return (
      <>
        <div>
          <Button className="w-full flex flex-row justify-start gap-2 h-11">
            <Link to={`/workspace/${currentWorkspace?._id}/members/${id}`}>
              <Avatar>
                <AvatarImage src={img} className="  bg-slate-600 " />
                <AvatarFallback>
                  {username.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </Link>
            <span className='m-2 ml-4'>{username}</span>
          </Button>
        </div>
      </>
    );
}