import React,{createContext, useContext ,useReducer} from "react";

//prepare the datalayer
export const StateContext = createContext();

//wrap our app and provide the data layaer
export const StateProvider = ({reducer,initalState,children}) =>(
    <StateContext.Provider value = {useReducer(reducer, initalState)}>{children}</StateContext.Provider>
);

//pull information from the data layer

export const useStateValue = () => useContext(StateContext);
