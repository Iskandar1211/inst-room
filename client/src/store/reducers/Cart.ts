import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface CartState {
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

const initialState: CartState = {
    items: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Item>) => {
            const newItem: Item = {
                ...action.payload,
                total: action.payload.price,
                quantity: 1
            };
            state.items.push(newItem);
        },

        removeFromCart: (state, action: PayloadAction<string>) => {
            const itemId = action.payload
            state.items = state.items.filter(item => item.id !== itemId)
        },
        updateItem: (state, action: PayloadAction<string>) => {
            const itemId = action.payload
            const item = state.items.find(item => item.id === itemId)

            if (item) {
                item.id = itemId
            }
        },
        clearCart: state => {
            state.items = []
        },
        incrementQuantity: (state, action: PayloadAction<string>) => {
            const itemId = action.payload
            const item = state.items.find(item => item.id === itemId)
            if (item) {
                // Обновите свойство quantity
                item.quantity = (item.quantity || 0) + 1
                // Обновите свойство total
                item.total = (item.total || 0) + item.price
            }
        },
        decrementQuantity: (state, action: PayloadAction<string>) => {
            const itemId = action.payload
            const item = state.items.find(item => item.id === itemId)
            console.log(item);

            if (item) {
                // Обновите свойство quantity
                item.quantity = (item.quantity || 0) - 1
                // Обновите свойство total
                item.total = (item.total || 0) + item.price
            }
        },
    },
})

export const { addToCart, removeFromCart, updateItem, clearCart, incrementQuantity, decrementQuantity } = cartSlice.actions

export const selectCartItems = (state: RootState) => state.cart.items

export default cartSlice.reducer
