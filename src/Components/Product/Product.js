import React from 'react';


function Product(props){
    const {deleteProduct, product } = props;
    return(
        <div>
            <button onClick = {() => deleteProduct(product.id)}>Delete Product</button>
        </div>
    );
}

export default Product;