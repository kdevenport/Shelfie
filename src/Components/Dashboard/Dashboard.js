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
        axios.get('http://localhost:4040/api/inventory').then((response) => {
            this.setState({
                inventoryList: response.data
            })
        })
    }
    deleteProduct = (id) => {
        axios.delete(`/api/product/${id}`).then( response => {
            console.log(response);
          this.getProducts();
        })
    }

    render(){
        const list = this.state.inventoryList.map((product, i) =>{
            return <Product key = {i} product={product} deleteProduct={this.deleteProduct}/>
        });
        console.log(this.state.inventoryList);
        return(
            <div>
                <button>Dashboard</button>
            <div>{list}</div>
            </div>
        )
    }
}
export default Dashboard;