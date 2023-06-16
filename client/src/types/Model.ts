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

export interface IOrder {
    id: string;
    name: string;
    lastName: string;
    phone: string;
    email: string;
}

export interface IDelivery {
    id: string
    city: string
    street: string
    frame: string
    house: string
    apartment: string
    delivery: boolean
    pickupAddress: string | undefined
}

export interface IPayment {
    id: string,
    paymentUponReceipt: boolean,
    cash: boolean,
    bankСard: boolean,
    onlinePayment: boolean,
}

export interface IHistoryOfOrder {
    id: string,
    orderNumber: number,
    created: string,
    received: string,
    purchases: IProduct[],
    orders: IOrder[],
    deliveryInfo: IDelivery[],
    payments: IPayment[]
}