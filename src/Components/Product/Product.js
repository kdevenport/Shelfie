import React from 'react';
import { Link } from 'react-router-dom';


function Product(props){
    const {deleteProduct, product } = props;
    console.log(product);
    return(
        <div>
            <p>{product.name}</p>
            <img src={product.image_url}></img>
            <p>{product.description}</p>
            <p>${Number(product.price).toLocaleString()}</p>
            <Link to={`/edit/${product.id}`}><button>Edit</button></Link>
            <button onClick = {() => deleteProduct(product.product_id)}>Delete</button>
        </div>
    );
}

export default Product;