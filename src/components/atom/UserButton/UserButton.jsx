import { BiLogOutCircle } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import { MdCreate } from 'react-icons/md';
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
import { useCreateWorkspaceModal } from '@/hooks/context/useCreateWorkspaceModal';
import { useToast } from '@/hooks/use-toast';

export const UserButton = () => {
  const { auth, logOut } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const { setOpenWorkspaceModal } = useCreateWorkspaceModal();

  async function handleLogout() {
    await logOut();
    toast({
      title: 'Successfully signed out',
      type: 'success',
    });
    navigate('/auth/signin');
  }
  function openModal() {
    setOpenWorkspaceModal(true);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="size-14 hover:scale-110 transition-transform duration-300 ease-in-out shadow-2xl bg-pink-800/95 border border-spacing-2">
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
        <DropdownMenuItem onClick={openModal}>
          <MdCreate className="size-4 mr-2 h-10" />
          Create New Workspace
        </DropdownMenuItem>
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
