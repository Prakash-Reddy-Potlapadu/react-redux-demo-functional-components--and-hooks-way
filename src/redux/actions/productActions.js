//create actions using constants and payload, which when dispatched update the state through reducer
import {ActionTypes} from '../constants/action-types'
export const setProducts=(products)=>{
      return {
          type:ActionTypes.SET_PRODUCTS,
          payload:products
      }
}

export const selectedProduct=(product)=>{
    return {
        type:ActionTypes.SELECTED_PRODUCT,
        payload:product
    }
}
export const removeSelectedProduct=()=>{
    return {
        type:ActionTypes.REMOVE_SELECTED_PRODUCT,
    }
}