import { GrChannel } from "react-icons/gr";

export const ChannelHeader = ({ channelName }) => {
  return (
    <div className="flex justify-center items-center w-full bg-slate-200 p-2 gap-2 border border-slate-400/20 m-0.5">
          <GrChannel size="18"/>
          <p className=' text-xl font-serif'>{channelName}</p>
    </div>
  );
};
