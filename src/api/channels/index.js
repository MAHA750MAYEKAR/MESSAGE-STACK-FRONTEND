import axios from "@/config/axiosConfig";

export const fetchChennelByIdRequest = async ({ channelId, token }) => {
  try {
    const response = await axios.get(`/api/v1/channels/${channelId}`, {
      headers: {
        "x-access-token": token,
      },
    });
    console.log("fetched channel by id", response.data.data);

    return response?.data?.data;
  } catch (error) {
    console.log("error in fetching channel by id", error.response);

    throw error.response;
  }
};
