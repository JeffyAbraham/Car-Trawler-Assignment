import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../redux/reducer'

const middlewares=[thunk];


 const testStore=createStore(rootReducer,applyMiddleware(...middlewares))



 export  default testStore