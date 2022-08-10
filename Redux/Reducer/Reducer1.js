import { register_user } from "../Type";

const initialState={
    Data:[],
}
const Reducer=function (state=initialState,action){
    switch(action.type){
        case register_user:
            console.log("action-payload",action.payload)
            const Token=action.payload.data.token
            localStorage.setItem("Token",Token)
            return{
                ...state,
                Data:action.payload

            }
        default: return state
    };
};
export default Reducer;