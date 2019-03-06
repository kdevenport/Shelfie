import React, { Component } from 'react';
import axios from 'axios';


class Form extends Component{
    constructor(){
        super();

        this.state = {
            id: null,
            imageUrl: "",
            productName: "",
            price: ""
        }
    this.handleCancel=this.handleCancel.bind(this)
    }
    handleImageUpdate(value){
        this.setState({
            imageUrl: value
        })
    }
    handleProductNameUpdate(value){
        this.setState({
            productName: value
        })
    }
    handlePriceUpdate(value){
        this.setState({
            price: value
        })
    }
    handleCancel(){
        this.setState({
            imageUrl: '',
            productName:'',
            price:''
        })
    }
    render(){
        return(
            <div className = "form">
                <div>
                    <div>Image URL:</div>
                    <input placeholder="Image URL" value={this.state.imageUrl} onChange={e => this.handleImageUpdate(e.target.value)}type="text"></input>
                    <div>Product Name:</div>
                    <input placeholder="Product Name" value={this.state.productName} onChange={e => this.handleProductNameUpdate(e.target.value)} type="text"></input>
                    <div>Price:</div>
                    <input placeholder="Price"value={this.state.price} onChange={e => this.handlePriceUpdate(e.target.value)} type="text"></input>
                </div>
                <div>
                    <button onClick={this.handleCancel}>Cancel</button>
                    <button>Add to Inventory</button>
                </div>
            </div>
        )
    }
}
export default Form;




