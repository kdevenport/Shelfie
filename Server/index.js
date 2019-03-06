const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const{
    PORT,
    CONNECTION_STRING
} = process.env;

const app = express();

app.use(bodyParser.json());

massive(CONNECTION_STRING).then((dbInstance) =>{
    app.set('db', dbInstance);
}).catch((error) =>{
    console.log(error);
})
app.get('/api/inventory', controller.getProducts);

app.post('/api/product', controller.createProduct);

app.get('/api/product/:id', controller.getProduct);

app.put('/api/product/:id', controller.updateProduct);

app.delete('/api/product/:id', controller.deleteProduct);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
});