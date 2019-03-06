import React from 'react';

function Product(props){
    const {id, productName, price, imageUrl } = props;
    return(
        <div className="product">
        <img src={imageUrl} alt={productName} />
        <p>{productName}</p>
        <p>{price}</p>

        </div>
    );
}

export default Product;