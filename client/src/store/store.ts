import { Favorites } from './reducers/Favorites';
import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from './reducers/Cart'
// ...

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    favorites:Favorites.reducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
