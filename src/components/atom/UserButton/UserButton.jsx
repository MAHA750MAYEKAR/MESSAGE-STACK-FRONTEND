import { BiLogOutCircle } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import { VscAccount } from 'react-icons/vsc';

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


export const UserButton = () => {
    const { auth } = useAuth();
    
    
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
            <FiSettings className='size-4 mr-2 h-10' />
            Settings
          </DropdownMenuItem>
          <DropdownMenuItem>
            <BiLogOutCircle className="size-4 mr-2 h-10" />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ); 
};
