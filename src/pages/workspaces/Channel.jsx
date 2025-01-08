import { useParams } from "react-router-dom";
import { useFetchChannelById } from "@/hooks/channels/useFetchChannelById";
import { LucideLoader2 } from "lucide-react";
import { TriangleAlert } from "lucide-react";
export const Channel = () => {
  const { channelId } = useParams();
  const { error, isFetching, channel } = useFetchChannelById(channelId);
  console.log("channel details", channel);
  // console.log("===>",channel.name);

  if (isFetching) {
    return (
      <div className="h-screen flex justify-center items-center ">
        <LucideLoader2 className="animate-spin" />
      </div>
    );
  }
  if (error) {
    return (
      <div className="h-screen flex justify-center items-center gap-2 ">
        <TriangleAlert />
        <span>channel not found</span>
      </div>
    );
  }

  return (
    <div>
      Channel {channelId}
      {channel.name}
    </div>
  );
};
