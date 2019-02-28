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

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
});