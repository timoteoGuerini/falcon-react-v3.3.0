import axios from 'axios';
import * as types from './types'; 
// import errorHandler from 'utils/errorHandler';

export const processUser = formData => async dispatch => {
    try {  
      const { data } = await axios.get(
        `http://abmpersonalinternoapi.deliver.ar/api/LoginUid?uid=${formData.email}&pass=${formData.password}`,
        {
          headers:{
            "Content-Type":"application/json"
          }
        }
      );

      console.log(data)

      let permission
      if (formData.email == "lpardo@uade.edu.ar"){
        permission = "user"
      }
      else {
        permission = "admin"
      }

      localStorage.setItem("email", formData.email)
      localStorage.setItem("role", permission)
    } catch (error) {
      console.log(Error)
      // errorHandler(error, dispatch);
    }
  };