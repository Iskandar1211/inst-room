export interface IProduct {
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

export interface IProductAcord {
    id: string,
    orderNumber: number,
    created: string,
    received: string,
    purchases: IProduct[]
}
