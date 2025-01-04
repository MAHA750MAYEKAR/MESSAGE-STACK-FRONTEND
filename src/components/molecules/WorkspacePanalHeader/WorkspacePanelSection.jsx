import { PlusIcon } from 'lucide-react';
import { useState } from 'react';
import { FaCaretDown, FaCaretRight } from 'react-icons/fa';

import { Button } from '@/components/ui/button';
export const WorkspacePanelSection = ({ children, label, onIconClick }) => {
    const [open, setOpen] = useState(true);
   
  return (
    <div className="flex flex-col  px-2 gap-2  bg-black mt-3 pt-2 m-2 rounded-sm">
      <div className="flex items-center  ">
        <Button
          onClick={() => setOpen(!open)}
          className="group text-sm   justify-between items-center overflow-hidden w-full "
        >
          <Button className="p-0.5 text-sm size-6">
            {open ? (
              <FaCaretDown className="size-4" />
            ) : (
              <FaCaretRight className="size-4" />
            )}
          </Button>
          <span className="m-2 hover:opacity-85">{label}</span>
          {onIconClick && (
            <Button size="sm" onClick={onIconClick}>
              <PlusIcon className="size-4 text-white opacity-80 " />
            </Button>
          )}
        </Button>
      </div>
      {open && children}
    </div>
  );
};
