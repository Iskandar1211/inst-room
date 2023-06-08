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

app.use('/users', userRoutes);
app.use('/contacts', contactsRoutes);
app.use('/', messageRoutes)


app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
