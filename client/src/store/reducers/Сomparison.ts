import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface IСomparison {
    comparison: Item[]
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
    quantity: number
}

const initialState: IСomparison = {
    comparison: [{
        id: crypto.randomUUID(),
        name: "Emal Big",
        img: "/Painting-supplies/Emal-116-big.png",
        price: 500,
        inStock: true,
        detailed: "Эмаль Condor ПФ-115 жёлтая 1,8 кг",
        isNew: true,
        total: 0,
        quantity: 0,
    },
    {
        id: crypto.randomUUID(),
        name: "Emal",
        img: "/Painting-supplies/Emal-116.png",
        price: 650,
        inStock: false,
        detailed: "Эмаль Condor ПФ-115 жёлтая 1,8 кг",
        isNew: false,
        total: 0,
        quantity: 0,
    },
    {
        id: crypto.randomUUID(),
        name: "Emal Big",
        img: "/electric/nozzle.png",
        price: 500,
        inStock: true,
        detailed: "Эмаль Condor ПФ-115 жёлтая 1,8 кг",
        isNew: true,
        total: 0,
        quantity: 0,
    },
    {
        id: crypto.randomUUID(),
        name: "Emal",
        img: "/electric/screwdriver.png",
        price: 650,
        inStock: false,
        detailed: "Эмаль Condor ПФ-115 жёлтая 1,8 кг",
        isNew: false,
        total: 0,
        quantity: 0,
    }
    ],
}

export const Сomparison = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToСomparison: (state, action: PayloadAction<Item>) => {
            state.comparison.push(action.payload);
        },

        removeFromСomparison: (state, action: PayloadAction<string>) => {
            const itemId = action.payload
            state.comparison = state.comparison.filter(item => item.id !== itemId)
        },
        updateСomparison: (state, action: PayloadAction<string>) => {
            const itemId = action.payload
            const item = state.comparison.find(item => item.id === itemId)

            if (item) {
                item.id = itemId
            }
        },


    },
})

export const { addToСomparison, removeFromСomparison, updateСomparison } = Сomparison.actions

export const selectCartItems = (state: RootState) => state.cart.items

export default Сomparison.reducer
