import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


//api call or asynchronous function call  using thunk
//first argument is name of slice +/+name of Thunk function
export const fetchRestaurant = createAsyncThunk('restaurantSlice/fetchRestaurant', () => {
    const result = axios.get('/restaurant.json').then(response => response.data);
    console.log("===response===");
    console.log(result);
    return result;


})

const restaurantSlice = createSlice({
    name: "nbvnbvnb",
    initialState: {
        loading: false,  //pending state thet means, api call in-prograss
        allRestaurant: [],  //resolve stage
        error: ""  //rejected state-return error
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRestaurant.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchRestaurant.fulfilled, (state, action) => {
            state.loading = false
            state.allRestaurant = action.payload
            state.searchRestaurant=action.payload
            state.error = ""
        })
        builder.addCase(fetchRestaurant.rejected, (state, action) => {
            state.loading = false;
            state.allRestaurant = []
            state.error = action.error.message
        })
    },
    reducers:{
        searchRestaurant:(state,action)=>{
            state.allRestaurant.restaurants=state.searchRestaurant?.restaurants.filter(item=>item.neighborhood.toLowerCase().includes(action.payload))
        }
    }

})

export default restaurantSlice.reducer;
export const {searchRestaurant} =restaurantSlice.actions;

//redux is a synchronous operation
//but api call or file read or write ,etc are asynchronous operation
//to deal with asynchronous operation in redux, we are using redux thunk
//thunk is not a part of slice,seperate method in redux toolkit