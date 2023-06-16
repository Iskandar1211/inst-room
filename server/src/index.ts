import { Request, Response } from 'express';
import { IDelivery, IOrder, IPayment, IProduct } from './../../client/src/types/Model';
const express = require("express")
import contactsRoutes = require('./routes/ContactRoutes');
import messageRoutes from './routes/MessageRoutes';
import userRoutes = require('./routes/UserRoutes')
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3009;

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());


const orders: IOrder[] = [];
const deliveryInfo: IDelivery[] = []
const payments: IPayment[] = [];
const productsFromCart:IProduct[] = [] 


app.get('/', (req: Request, res: Response) => {
  res.send('hello server')
})

app.get('/products', (req: Request, res: Response) => {
  res.send(orders)
})

app.post('/create-product', (req: Request, res: Response) => {
  const newProduct = req.body;
  orders.push(newProduct);
  res.send('продукт успешно создан')
})

app.get('/delivery-info', (req: Request, res: Response) => {
  res.send(deliveryInfo)
})

app.post('/create-delivery-info', (req: Request, res: Response) => {
  const newDelivery = req.body;
  deliveryInfo.push(newDelivery);
  res.send('доставку успешно добавлен')
})

app.post('/create-payment', (req: Request, res: Response) => {
  const newPayment = req.body;
  payments.push(newPayment);
  res.send('оплата успешно выполнен')
})

app.post('/create-product-from-cart', (req: Request, res: Response) => {
  const newProduct = req.body;
  productsFromCart.push(newProduct);
  res.send('продукт успешно добавлен')
})

// app.use('/users', userRoutes);
// app.use('/contacts', contactsRoutes);
// app.use('/', messageRoutes)


app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
