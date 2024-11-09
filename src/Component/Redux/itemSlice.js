import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'


export const fetchItemsById = createAsyncThunk(
    'hackerNews/fetchItemsById',
    async (id, {rejectWithValue}) => {
        try{
        const response = await axios.get(`http://hn.algolia.com/api/v1/items/${id}`)
            return response.data;
        }
        catch(error){
            return rejectWithValue(error.response.data);
        }
    }
)
//  define the slice
const itemSlice = createSlice({
    name: 'hackerNews',
    initialState: {
        item: {},
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
           .addCase(fetchItemsById.pending, (state) => {
               state.status = 'loading';
               state.error = 'null'
           })
           .addCase(fetchItemsById.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.item = action.payload;

           })
           .addCase(fetchItemsById.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message
           })
    }
})

export default itemSlice.reducer