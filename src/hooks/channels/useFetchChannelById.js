import { useQuery } from "@tanstack/react-query";
import { fetchChennelByIdRequest } from "@/api/channels";
import { useAuth } from "../context/useAuth";
export const useFetchChannelById = (channelId) => {
  const { auth } = useAuth();
  const {
    error,
    isSuccess,
    isFetching,
    data: channel,
  } = useQuery({
    queryFn: () => fetchChennelByIdRequest({ channelId, token: auth?.token }),
    queryKey: [`fetchChannelById-${channelId}`],
    staleTime: 10000,
  });

  return {
    error,
    isSuccess,
    isFetching,
    channel,
  };
};
