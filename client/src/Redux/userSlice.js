import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name:"user",
    initialState:{
        user:null,
        loggedIn:false
    },
    reducers:{
        loginUser:(state,action)=>{
            state.user = action.payload
            state.loggedIn = true
        },
        logout:(state)=>{
            state.user = null;
        }
    }
})

export const {loginUser, logout} = userSlice.actions;

export const selectUser = (state)=>state.user.user;

export default userSlice.reducer;