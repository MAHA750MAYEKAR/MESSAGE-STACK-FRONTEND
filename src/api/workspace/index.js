import axios from '@/config/axiosConfig';
export const createWorkspacerequest = async ({ name, description,token }) => {
  try {
    const response =await axios.post(
      '/api/v1/workspaces',
      { name, description },
      {
        headers: {
          'x-access-token': token,
        },
      }
    );
    console.log('response created in create workspace', response);

    return response.data;
  } catch (error) {
    console.log('Error in creating Workspace',error.response.data.message);
    throw error.response.data.message;
  }
};


export const fetchWorkspaceRequest = async({token}) => {
    try {
        const response = await axios.get('/api/v1/workspaces', {
            headers: {
                'x-access-token':token
            }
        });

        console.log('successfully fetched all the workspces user in memmber', response);
        console.log('response.data', response.data);
          console.log('response.data.data', response.data.data);
        return response?.data?.data;
        
        
    } catch (error) {
        console.log('Error in fetching Workspace', error);
    throw error.response;
    }
};

export const fetchWorkspaceByIdRequest =async ({workspaceId,token}) => {
  try {
    const response = await axios.get(`/api/v1/workspaces/${workspaceId}`, {
      headers: {
      'x-access-token':token
    } });
    console.log('succsess in fetching workspace by id', response?.data?.data);
    
    return  response?.data?.data;
    
    
  } catch (error) {
    console.log('failed!! error in fetching workspace by Id',error);
    throw error;
    
    
  }
};