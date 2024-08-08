import { createSlice } from "@reduxjs/toolkit";


const initialState={
    user:false,
    admin:false,
    name:"",
    uid:"",
    email:"",
    password:""

}

const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        setUser:(state,action)=>{
            state.user=true
            state.name=action.payload.name,
            state.uid=action.payload.uid,
            state.email=action.payload.email,
            state.password=action.payload.password

        },
        setLogout:(state)=>{
            state.user=false,
            state.name="",
            state.uid="",
            state.email=""
        },
        updateUser:(state,action)=>{
            state.name=action.payload,
            state.email=action.payload
        },
        setAdmin:(state,action)=>{
            state.user=true
            state.admin=true
            state.uid=action.payload
        }
    }
})

export const  {setUser,setLogout,updateUser,setAdmin} =userSlice.actions

export default userSlice.reducer