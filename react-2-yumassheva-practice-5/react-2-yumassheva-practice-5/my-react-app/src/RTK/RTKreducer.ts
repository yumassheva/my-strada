import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
 
export const fetchName = createAsyncThunk('toolkit/fetchName', async function fetchName (text) {
   const response = await fetch(`https://api.genderize.io?name=${text}`)
    const data = await response.json();
      return data
   })
export const toolkitSlice = createSlice({
    name: 'toolkit',
    initialState: {
        start: "",
    },
    reducers: {
        gender(state, action) {
            state.start = action.payload
        },
    },
     extraReducers: (builder) => {
    builder.addCase(fetchName.fulfilled, (state, action) => {
         state.start = action.payload
      })
  },
})
export default toolkitSlice.reducer;
export const { gender } = toolkitSlice.actions;