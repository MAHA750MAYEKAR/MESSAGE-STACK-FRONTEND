import { BiLogOutCircle } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import { VscAccount } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAuth } from '@/hooks/context/useAuth';
import { useToast } from '@/hooks/use-toast';


export const UserButton = () => {
    const { auth, logOut } = useAuth();
    const { toast } = useToast();
    const navigate=useNavigate();

  async function handleLogout() {
      await logOut();
      toast({
        title: 'Successfully signed out',
        type: 'success',
      });
      navigate('/auth/signin');
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={auth?.user?.avatar} />
          <AvatarFallback>
            {auth?.user?.username[0].toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          <div className="flex gap-3">
            <VscAccount className="size-6" />
            {auth?.user?.username}
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <FiSettings className="size-4 mr-2 h-10" />
          Settings
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleLogout}>
          <BiLogOutCircle className="size-4 mr-2 h-10" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
