import { configureStore } from '@reduxjs/toolkit'
import counterSliceReducer from './features/counterSlice'

export const Store = configureStore({
    reducer : {
        counter : counterSliceReducer
    },
})