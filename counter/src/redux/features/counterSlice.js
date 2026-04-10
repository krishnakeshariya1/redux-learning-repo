import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name : "counter",
    initialState : {
        value : 0
    },
    reducers :{
        increment  : (state) =>{
            state.value += 1;
        },
        
        decremnet : (state) =>{
            state.value -= 1
        },
        increaseBy5 : (state, val)=>{
            state.value += val.payload
        }
    }
})

export const {increaseBy5, decremnet, increment} = counterSlice.actions;
export default counterSlice.reducer