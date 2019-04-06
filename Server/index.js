const express = require('express');
const controller =require('./controller');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config({ path: __dirname + '/config/.env' });

// if (process.env.NODE_ENV == 'development') {
//     require('dotenv').config({ path: __dirname + '/.env.local' });
// }
// else if (process.env.NODE_ENV == 'test') {
//     require('dotenv').config({ path: __dirname + '/.env.test' });
// }

const{
    PORT,
    CONNECTION_STRING
} = process.env; 

const app = express();
app.use(cors());

app.use(bodyParser.json());

massive(CONNECTION_STRING, { scripts: __dirname + '/db' }).then((dbInstance) => {
    console.log('DB Connected');
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