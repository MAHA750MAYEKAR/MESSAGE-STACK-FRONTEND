import { Button } from '@/components/ui/button';

export const SidebarButton = ({ Icon, label }) => {
  return (
    <>
      <div className="flex flex-col gap-1 cursor-pointer justify-center items-center">
        <Button className="hover:bg-slate-700 size-10 text-white hover:scale-110 transition-transform duration-300 ease-in-out">
          <Icon className="size-5" />
        </Button>
        <span className="text-[10px] text-white group-hover:text-accent">
          {label}
        </span>
      </div>
    </>
  );
};
