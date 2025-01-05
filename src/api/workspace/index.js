import axios from '@/config/axiosConfig';
export const createWorkspacerequest = async ({ name, description, token }) => {
  try {
    const response = await axios.post(
      '/api/v1/workspaces',
      { name, description },
      {
        headers: {
          'x-access-token': token,
        },
      }
    );
    //console.log("response created in create workspace", response);

    return response.data;
  } catch (error) {
    console.log('Error in creating Workspace', error.response.data.message);
    throw error.response.data.message;
  }
};

export const fetchWorkspaceRequest = async ({ token }) => {
  try {
    const response = await axios.get('/api/v1/workspaces', {
      headers: {
        'x-access-token': token,
      },
    });

    console.log(
      'successfully fetched all the workspces user in memmber',
      response
    );
    //console.log("response.data", response.data);
    //console.log("response.data.data", response.data.data);
    return response?.data?.data;
  } catch (error) {
    console.log('Error in fetching Workspace', error);
    throw error.response;
  }
};

export const fetchWorkspaceByIdRequest = async ({ workspaceId, token }) => {
  try {
    const response = await axios.get(`/api/v1/workspaces/${workspaceId}`, {
      headers: {
        'x-access-token': token,
      },
    });
   console.log('succsess in fetching workspace by id', response?.data?.data);

    return response?.data?.data;
  } catch (error) {
    console.log('failed!! error in fetching workspace by Id', error);
    throw error;
  }
};

export const deleteWorkspaceByIdRequest = async ({ workspaceId, token }) => {
  try {
    const deletedWorkspace = await axios.delete(`/api/v1/workspaces/${workspaceId}`, {
      headers: {
        'x-access-token': token,
      },
    });

    //console.log("response of deleted workspace", deletedWorkspace);
    //console.log("response of deleted workspace==>", deletedWorkspace?.data);
    return deletedWorkspace?.data;
  } catch (error) {
    console.log('error in deleting workspace', error.response.data);
    throw error.response;
  }
};

export const updateWorkspaceRequest = async({ workspaceId, name, token }) => {
  try {
    const updatedWorkspace = await  axios.put(
      `/api/v1/workspaces/${workspaceId}`,
      { name },
      {
        headers: {
          'x-access-token': token,
        },
      }
    );
    //console.log("successfully updated workspace", updatedWorkspace.data);
    
    return updatedWorkspace.data;
  } catch (error) {
    console.log('error in updating workspace', error.response.data);
    throw error.response.data;
  }
};


export const addChannelToWorkspceRequest = async ({workspaceId,token,channelname}) => {

  try {
    const response = await axios.put(`/api/v1/workspaces/${workspaceId}/channels`, {channelname}, {
      headers: {
        'x-access-token':token
      }
    });
    console.log('create chanel response', response.data.data);
    
    return response?.data?.data;
    
  } catch (error) {
    console.log('error in adding channel to workspace',error.response);
    
    throw error.response;
  }
};


export const addMemberToWorkspaceRequest = async({workspaceId,token}) => {
  try {
    const response = await axios.put(`/api/v1/workspaces/${workspaceId}/members`, {
      headers: {
        "x-access-token":token
      }
    })
    console.log("added member to ws", response.data.data);
    return response?.data?.data;
    
    
  } catch (error) {
    console.log('error in adding member to workspace',error.response);
    
    throw error.response;
    
  }
}


export const joinWorkspaceByJoincodeRequest = async ({workspaceId,joinCode,token}) => {
  try {
    const response = await axios.put(`/api/v1/workspaces/${workspaceId}/join`, { joinCode }, {
      headers: {
      "x-access-token":token
      }
    })
    console.log("member joined workspace using joincode", response.data.data);
    return response?.data?.data;
    
    
  } catch (error) {
    console.log('error in joining workspace by joincode',error.response);
    
    throw error.response;
    
  }
}