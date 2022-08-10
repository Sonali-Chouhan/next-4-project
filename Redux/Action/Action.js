import { register_user } from "../Type";
import instance from "../../pages/api/Base";

export const  UserRegistered=(data)=>{
    
        return (dispatch) => {
          return instance
            .post("/signup", { user: data })
            .then((data) => {
              dispatch({
                type:register_user,
                payload: data,
              });
            })
            .catch((error) => {
              dispatch({
                type:"error",
                payload: error.response,
              });
            });
        };
    };