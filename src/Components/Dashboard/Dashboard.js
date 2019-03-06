import React, { Component } from 'react';
import Product from '../Product/Product';
import axios from 'axios';



class Dashboard extends Component{
    constructor(){
        super();

        this.state = {
            inventoryList: []
        }
    }
    componentWillMount(){
        this.getItemList();
    }
    componentDidUpdate(){
        this.getItemList();
    }
    getItemList(){
        axios.get('/api/inventory').then((response) => {
            this.setState({
                inventoryList: response.data
            })
        })
    }
    deletProduct = (id) => {
        axios.delete(`/api/product/{id}`).then( response => {
            this.state({
                inventoryList: response.data
            })
        })
    }

    render(){
        const list = this.state.inventoryList.map((product, index) =>{
            return( <Product
                    getItemList = {() => this.getItemList()}
                    currentProduct={product}
                    key={index}
                    delete={this.deleteProduct}/> 
                )
        })
        return(
            <div>{list}</div>
        )
    }
}
export default Dashboard;