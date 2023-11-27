import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: {},
    cast: [],
    url:{},
}

export const movieDetails = createSlice({
  name: 'home',
  initialState,
  reducers: {
    getCurrrentMovie : (state,action) =>{
      const { data, cast, url } = action.payload;

      state.data = data;
      state.cast = cast;
      state.url = url;
    }
  },
})

// Action creators are generated for each case reducer function
export const { getCurrrentMovie } = movieDetails.actions

export default movieDetails.reducer