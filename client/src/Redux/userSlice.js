import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name:"user",
    initialState:{
        user:null,
        loggedIn:false
    },
    reducers:{
        // user:(state)=>{
        // return state  
        // },
        loginUser:(state,action)=>{
            state.user = action.payload.user
            state.loggedIn = true

        },
        logout:(state)=>{
            state.user = null;
        },
        
    }
})

export const {loginUser, logout} = userSlice.actions;

export const selectUser = (state)=>state.user.user;

export default userSlice.reducer;