import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
    name : "search",
    initialState : { 
        query : '',
        activeTab : 'photos',
        result : [],
        loading : false,
        err : null
    },
    reducers :{
        setQuery(state, action){
            state.query = action.payload
        },

        setActiveTab(state, action){
            state.activeTab = action.payload
        },

        setResults(state,action){
             state.loading = false
            state.result = action.payload
        },

        setLoading(state, action){
            state.loading = true
            state.err = null
        },

        setError(state, action){
            state.loading = false
            state.err = action.payload;
        },

    }
})

export const { setQuery, setActiveTab, setResults ,setLoading, setError, } = searchSlice.actions

export default searchSlice.reducer;