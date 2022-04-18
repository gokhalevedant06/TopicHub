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
            if(action.payload.user.isTeacher){
                state.isTeacher=true;
            }else{
                state.isTeacher=false;
            }
            

        },
        logout:(state)=>{
            state.user = null;
            state.loggedIn = false
        },
        
    }
})

export const {loginUser, logout} = userSlice.actions;

export const selectUser = (state)=>state.user.user;

export const isLoggedIn = (state)=>state.user;

export default userSlice.reducer;