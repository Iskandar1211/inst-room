import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface ISearchState {
    items: Item[]
}

export interface Item {
    id: string,
    name: string,
    img: string,
    price: number,
    inStock: boolean,
    detailed: string,
    isNew: boolean,
    total: number,
    quantity: number,
    categories: string
}

const initialState: ISearchState = {
    items: [],
}

export const SearchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        addToSearch: (state, action: PayloadAction<Item>) => {
            state.items.push(action.payload);
        },
        clearSearch: state => {
            state.items = []
        },
    },
})

export const { addToSearch, clearSearch } = SearchSlice.actions

export const selectCartItems = (state: RootState) => state.cart.items

export default SearchSlice.reducer
