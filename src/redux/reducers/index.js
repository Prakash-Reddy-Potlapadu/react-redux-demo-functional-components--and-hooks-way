//combine multiple reducers into single reducer(which is the global store)
//when we dispatch an action, it runs for all reducers and execute the action whose case matches the action type.

import {combineReducers} from 'redux';
import { productReducer,selectedProductReducer } from './productReducer';

const reducers=combineReducers({
    allProducts:productReducer,
    product:selectedProductReducer
})

export default reducers;