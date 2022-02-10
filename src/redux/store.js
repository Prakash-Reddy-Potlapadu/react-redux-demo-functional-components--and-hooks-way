//createstore combines all reducers in the application and gives a single state, which is global for entire application
//createstore also integrates middleware like redux-thunk, redux-saga to redux. 

import {createStore} from 'redux';
import reducers from './reducers/index'

const store=createStore(reducers,{},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default store;