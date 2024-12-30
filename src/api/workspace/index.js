import axios from "@/config/axiosConfig";
import { log } from "console";
export const createWorkspacerequest = async ({ name, description, token }) => {
  try {
    const response = await axios.post(
      "/api/v1/workspaces",
      { name, description },
      {
        headers: {
          "x-access-token": token,
        },
      }
    );
    console.log("response created in create workspace", response);

    return response.data;
  } catch (error) {
    console.log("Error in creating Workspace", error.response.data.message);
    throw error.response.data.message;
  }
};

export const fetchWorkspaceRequest = async ({ token }) => {
  try {
    const response = await axios.get("/api/v1/workspaces", {
      headers: {
        "x-access-token": token,
      },
    });

    console.log(
      "successfully fetched all the workspces user in memmber",
      response
    );
    console.log("response.data", response.data);
    console.log("response.data.data", response.data.data);
    return response?.data?.data;
  } catch (error) {
    console.log("Error in fetching Workspace", error);
    throw error.response;
  }
};

export const fetchWorkspaceByIdRequest = async ({ workspaceId, token }) => {
  try {
    const response = await axios.get(`/api/v1/workspaces/${workspaceId}`, {
      headers: {
        "x-access-token": token,
      },
    });
    console.log("succsess in fetching workspace by id", response?.data?.data);

    return response?.data?.data;
  } catch (error) {
    console.log("failed!! error in fetching workspace by Id", error);
    throw error;
  }
};

export const deleteWorkspaceByIdRequest = async ({ workspaceId, token }) => {
  try {
    const deletedWorkspace = axios.delete(`/api/v1/workspaces/${workspaceId}`, {
      headers: {
        "x-access-token": token,
      },
    });

    console.log("response of deleted workspace", deletedWorkspace);
    console.log("response of deleted workspace==>", deletedWorkspace?.data);
    return deletedWorkspace?.data;
  } catch (error) {
    console.log("error in deleting workspace", error.response);
    throw error.response;
  }
};

export const updateWorkspaceRequest = ({ workspaceId, name, token }) => {
  try {
    const updatedWorkspace = axios.put(
      `/api/v1/workspaces/${workspaceId}`,
      { name },
      {
        headers: {
          "x-access-token": token,
        },
      }
    );
    console.log("successfully updated workspace", updatedWorkspace);
    console.log("successfully updated workspace", updatedWorkspace.response);
    return updatedWorkspace.response;
  } catch (error) {
    console.log("error in updating workspace", error.response);
    throw error.response;
  }
};
