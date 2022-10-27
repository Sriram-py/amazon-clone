import React,{createContext,useContext,useReducer} from "react";
//prepare the data layer 
export const StateContext = createContext();
//wrap our app and provides data layer
export const StateProvider = ({ reducer,initialState,children})=>(
    <StateContext.Provider value = {useReducer(reducer,initialState)}>
     {children}
    </StateContext.Provider> 
);

//pull the information from datalayer
export const useStateValue = () => useContext(StateContext);
