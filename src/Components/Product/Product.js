import React from 'react';
import { withRouter, Link } from 'react-router-dom';


function Product(props){
    const {deleteProduct, product } = props;
    console.log(product);
    return(
        <div className="Product">
            <p>{product.name}</p>
            <img src={product.image_url}></img>
            <p>{product.description}</p>
            <p>${Number(product.price).toLocaleString()}</p>
            <button onClick = {() => deleteProduct(product.product_id)}>Delete</button>
            <Link to={`/edit/${product.id}`}><button>Edit</button></Link>
           
        </div>
    );
}

export default withRouter(Product);