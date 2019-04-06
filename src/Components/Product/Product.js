import React from 'react';


function Product(props){
    const {deleteProduct, product } = props;
    console.log(product);
    return(
        <div>
            <p>{product.name}</p>
            <img src={product.image_url}></img>
            <p>{product.description}</p>
            <p>${Number(product.price).toLocaleString()}</p>
            <button onClick = {() => deleteProduct(product.id)}>Delete Product</button>
        </div>
    );
}

export default Product;