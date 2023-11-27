import { configureStore } from '@reduxjs/toolkit'

import movieDetails  from './slices/moviDetails/movieDetailSlice'
import cardListSlice from './slices/homeCardListSlice/cardListSlice'

export const store = configureStore({
  reducer: {
    movieDetail : movieDetails,
    cardList: cardListSlice,
  },
})