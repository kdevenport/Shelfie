module.exports = {
    getProducts: (req, res) => {
        req.app.get('db').get_inventory().then((products) =>{
            res.status(200).send(products);
        }).catch((error) => {
            res.status(500).send('Unable to get products');
            console.log(error);
        })
    },
    createProduct: (req, res) =>{
        let {name, price, image_url} = req.body;

        req.app.get('db').create_product([name, price, image_url]).then(() => {
            res.status(200).send('Created Product');
        }).catch((error) =>{
            console.log(error);
            res.status(500).send('Unable to create product');
        })
    },
    deleteProduct: (req, res) => {
        let db = req.app.get('db');
        let {id} = req.params;
        
        db.delete_product([id]).then(() => {
            res.status(200).send('Deleted');
        }).catch((err) => {
            console.log(err.message);
            res.status(500).send('Unable to Remove Product');
        })
    },
    updateProduct: (req, res) => {
        let {id} = req.params;
        let {desc} = req.query;

        req.app.get('db').update_product([desc, id]).then(() => {
            res.status(200).send('Product Updated');
        }).catch(() => {
            res.status(500).send('Unable to update product');
        })
    },
    getProduct: (req, res) => {
        let {id} = req.params;

        req.app.get('db').get_product([id]).then((product) => {
            res.status(200).send(product);
        }).catch(() => {
            res.status(500).send('Cannot get product');
        })
    }
}