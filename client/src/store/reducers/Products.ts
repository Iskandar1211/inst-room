import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from '../../types/Model'
import { RootState } from '../store'

interface IProductsAdmin {
    productsAdmin: IProduct[]
}

export interface productsAdmin {
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

const initialState: IProductsAdmin = {
    productsAdmin: [],
}

export const productsSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToProduct: (state, action: PayloadAction<IProduct>) => {
            const newProduct: IProduct = action.payload
            state.productsAdmin.push(newProduct);
        },

    },
})

export const { addToProduct } = productsSlice.actions

export const selectProductsItems = (state: RootState) => state.cart.items

export default productsSlice.reducer
