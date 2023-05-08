import { configureStore, combineReducers } from '@reduxjs/toolkit'
import  toolkitSlice from "./RTKreducer"
 
const rootReducer = combineReducers({
    toolkit: toolkitSlice,
})
const store = configureStore( {
    reducer: rootReducer,
})

store.subscribe(() => console.info(store.getState())) // Для отладки
export {store}