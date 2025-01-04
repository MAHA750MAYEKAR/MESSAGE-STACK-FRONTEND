import { ListFilterIcon, SquarePenIcon } from 'lucide-react';
import { useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAuth } from '@/hooks/context/useAuth';
import { usePreferencesModal } from '@/hooks/context/usePreferencesModal';


export const WorkspacePanelHeader = ({ workspace }) => {
  const { auth } = useAuth();
  //console.log("workspace in panel header",workspace);
  const {setWorkspace}=usePreferencesModal();
  const { setOpenPreferences, setInitialValue } = usePreferencesModal();
  const isUserAdminOfWorkspace = workspace.members.find(
    (member) => member.memberId._id === auth?.user?._id && member.role === 'admin'
  );

  useEffect(() => {
  setWorkspace(workspace);//
},[setWorkspace,workspace]);

  return (
    <div className="w-full flex  items-center  bg-slate-400  hover:bg-slate-400/80 gap-5 justify-between">
      <div></div>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex justify-center items-center w-full">
          <Button
            className="m-2 text-wrap overflow-hidden font-bold p-1 text-[18px]  bg-slate-400 w-full "
            size={'lg'}
            variant={'ghost'}
          >
            {workspace?.name}
            <FaChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-64">
          <DropdownMenuLabel className=" flex gap-3">
            <div className="bg-pink-300 w-10 h-10 rounded flex justify-center items-center text-xl">
              {workspace?.name.charAt(0).toUpperCase()}
            </div>
            <div className="w-40 flex gap-2 text-sm overflow-x-hidden justify-center items-center">
              <p className="font-semibold">{workspace?.name}</p>
              <span>
                <p className="h-3 w-3 bg-green-500 rounded-full  text-slate-500 mt-1"></p>
              </span>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />

          {isUserAdminOfWorkspace && (
            <>
              <DropdownMenuItem
                className="w-full"
                onClick={() => {
                  setOpenPreferences(true);
                  setInitialValue(workspace?.name);
                }}
              >
                Preferences
              </DropdownMenuItem>
              <DropdownMenuItem className="w-full">
                Invite people to {workspace.name}
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="flex items-center gap-2 mr-3">
        <Button className="h-8 w-1 hover:scale-110 transition-transform duration-300 ease-in-out  bg-slate-400  hover:bg-slate-800/70">
          <ListFilterIcon className="size-5" />
        </Button>
        <Button className="h-8 w-1 hover:scale-110 transition-transform duration-300 ease-in-out  bg-slate-400  hover:bg-slate-800/70">
          <SquarePenIcon className="size-5" />
        </Button>
      </div>
    </div>
  );
};
