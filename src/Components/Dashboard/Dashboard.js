import React, { Component } from 'react';
import Product from '../Product/Product';
import axios from 'axios';



class Dashboard extends Component{
    constructor(){
        super();

        this.state = {
            inventoryList: [],
        }
    }
    componentDidMount(){
        this.getProducts();
    }
    getSelectedProduct = (selectedProduct) => {
        this.setState({
            selectedProduct: selectedProduct
        })
    }
    getProducts = () => {
        axios.get('/api/inventory').then((response) => {
            this.setState({
                inventoryList: response.data
            })
        })
    }
    deleteProduct = (id) => {
        const{getProduct} = this.props;
        axios.delete(`/api/product/${id}`).then( response => {
         getProduct();
        })
    }

    render(){
        const list = this.props.inventoryList.map((product, index) =>{
            return <Product key = {product.id} product={product} deleteProduct={this.deleteProduct}/>
        });
        return(
            <div>{list}</div>
        )
    }
}
export default Dashboard;