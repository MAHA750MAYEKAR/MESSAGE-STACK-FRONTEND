import { useParams } from "react-router-dom";
import { useFetchChannelById } from "@/hooks/channels/useFetchChannelById";
import { LucideLoader2 } from "lucide-react";
import { TriangleAlert } from "lucide-react";
import { ChatInput } from '@/components/molecules/ChatInput/ChatInput';
import { ChannelHeader } from '@/components/molecules/channelHeader/ChannelHeader';
import { useSocket } from '@/hooks/context/useSocket';
import { useEffect } from 'react';
export const Channel = () => {
  const { joinChannel } = useSocket();
  const { channelId } = useParams();
  const { error, isFetching, channel } = useFetchChannelById(channelId);
 
  // console.log("===>",channel.name);

  useEffect(() => {
    if (!isFetching && !error) {
      //console.log("channel id inside socket",channelId);
      
      joinChannel(channelId)
    }
  },[isFetching,error,channelId,joinChannel])

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
 console.log("channel details", channel);
  return (
    <div className="flex flex-col h-full">
      <ChannelHeader channelName={channel.name} />
      <div className="flex-1" />
      <ChatInput />
    </div>
  );
};
