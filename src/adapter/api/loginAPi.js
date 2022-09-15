import axios from "axios";
import toast from 'react-hot-toast';
export const login = async (data) => {
  const response =  await axios
    .post("https://reqres.in/api/login", data)
    .catch((err) => {
     
      if (err.response){
         
         toast.error(err.response.data.error) ;
         //do something
         console.log('error response')
         
         
         }else if(err.request){
            console.log('error request')
         //do something else
         
         }else if(err.message){
            console.log('error message')
         //do something other than the other two
         
         }
    });
    return response;
};
