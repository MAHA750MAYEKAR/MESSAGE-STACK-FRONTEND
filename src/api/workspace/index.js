import axios from '@/config/axiosConfig';
export const createWorkspacerequest = async ({ name, description,token }) => {
  try {
    const response = axios.post(
      '/api/v1/workspaces',
      { name, description },
      {
        headers: {
          'x-access-token': token,
        },
      }
    );
    console.log('response created in create workspace', response.data);

    return response.data;
  } catch (error) {
    console.log('Error in creating Workspace', error);
    throw error.response;
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
        return response?.data;
        
        
    } catch (error) {
        console.log('Error in fetching Workspace', error);
    throw error.response;
    }
};
