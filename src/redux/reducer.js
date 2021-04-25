import {combineReducers} from 'redux'
import CarListReducer from './car-reducer/car-reducer'







const rootReducer=combineReducers({

  cars:CarListReducer,
  

    
})

export default rootReducer