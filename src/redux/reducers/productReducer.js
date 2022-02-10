//reducers take state and action, and return the updated state.
//we can use single state and reducer for all related data, here just used 2 reducers just to demonstrate how to use and combine multiple reducers

import { ActionTypes } from "../constants/action-types";

const initialState={
    products:[
       { id:1,title:'Cola',category:'Drinks'}
    ],
    
}

export const productReducer=(state=initialState,action)=>{
    const {type,payload}=action;
switch (type) {
    case ActionTypes.SET_PRODUCTS:
        return {...state,products:payload};
    default:
        return state;
}
}

export const selectedProductReducer=(state={},action)=>{
    const {type,payload}=action;
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state,...payload}
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {}
    
        default:
            return state;
    }
}