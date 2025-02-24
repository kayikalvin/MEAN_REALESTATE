import { createSlice, current } from "@reduxjs/toolkit";


//initia; state before the user signs in
const initialState = {
     currentUser:null,
     error:null,
     loading:false,
};

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        signInStart: (state)=> {
            state.loading = true;
        },
        signInSuccess: (state,action) => {
            state,currentUser = action.payload;// this the data we get
            state.loading = false;
            state.error = null; 
        },
        signInFailure:(state,action) => {
            state.error = action.payload;
            state.loading = false;
        }
    }
});


export const {signInStart,signInFailure,signInSuccess}  =userSlice.actions;

export default userSlice.reducer;