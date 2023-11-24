import axios from 'axios';
import * as types from './types';
// import errorHandler from 'utils/errorHandler';

export const getUser = formData => async dispatch => {
    try {
      dispatch({ type: types.USER_REQUEST });
  
      const { data } = await axios.get(
        `http://abmpersonalinternoapi.deliver.ar/api/LoginUid?uid=${formData.email}&pass=${formData.password}`,
        {
          headers:{
            "Content-Type":"application/json"
          }
        }
      );
  
      dispatch({
        type: types.USER_GET,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: types.USER_FAIL
        //payload: error
      });
  
      // errorHandler(error, dispatch);
    }
  };