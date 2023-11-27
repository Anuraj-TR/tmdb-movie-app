import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: {},
    title:{},
}

export const cardListSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setCurrentMovies : (state,action) =>{
      const { data,title } = action.payload;

      state.data = data;
      state.title = title;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setCurrentMovies } = cardListSlice.actions

export default cardListSlice.reducer