import { Favorites } from './reducers/Favorites';
import { Сomparison } from './reducers/Сomparison'
import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from './reducers/Cart'
// ...

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    favorites: Favorites.reducer,
    comparison: Сomparison.reducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
