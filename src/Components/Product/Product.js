import React from 'react';
import { withRouter } from 'react-router-dom';

import './Product.css';


function Product(props){
    const {deleteProduct, product } = props;
    console.log(product);
    return(
        <div className="product">
            <img className="product_img" src={product.imageURL}></img>
            <div className="product-box">
            <p className="product_title">{product.name}</p>
            <p className="product_price">{product.description}</p>
            <p>${Number(product.price).toLocaleString()}</p>
            </div>
            <div className="product_buttons">
            <button onClick = {() => deleteProduct(product.product_id)}>Delete</button>
            <button onClick ={() => props.history.push(`/edit/${product.id}`)}>Edit</button>
            </div>
        </div>
    );
}

export default withRouter(Product);