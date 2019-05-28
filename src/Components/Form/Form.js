import React, { Component } from 'react';
import axios from 'axios';

import './form.css';


class Form extends Component{
    constructor(props){
        super(props);

        this.state = {
            imageUrl: "",
            productName: "",
            price: 0,
            edit: false
        }
    }

    componentDidMount(){
        const {id} = this.props.match.params;
        this.getProduct(id);
    }

    //methods
    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handlePriceChange = (event) => {
        this.setState({
            price: event.target.value
        })
    }

    handleImgChange = (event) => {
        this.setState({
            imgURL: event.target.value
        })
    }

    resetState = () => {
        this.setState({
            imgURL: '',
            name: '',
            price: ''
        })
    }
    getProduct = (id) => {
        axios.get(`/api/product/:${id}`).then(response => {
            console.log(response);
            const {imgURL, name, price} = response.data;
            this.setState({
               imgURL:imgURL,
               name: name,
               price: price
            });
        })
    }

    createProduct = () => {
        const {imgURL, productName, price} = this.state;

        const product = {
            imgURL: imgURL,
            productName: productName,
            price: price
        }
        axios.post('/api/product', product).then(response => {
            this.props.history.push('/');
        });

        this.resetState();
    }
    updateProduct = () => {
        const {id} = this.props.match.params;
        const {imgURL, productName, price } = this.state;
        axios.put(`/api/product/${id}`, this.state).then(response =>{
            this.props.history.push('/');
        })
    }


  render() {
    return (
        <div className = "form">
            <div>
                <div className="img_error">
                <img src={this.state.imgURL} onError={() => {
                     this.setState({
                        imgURL: 'https://www.marylandhillel.org/wp-content/plugins/bc-flex-content/images/default-no-image.jpg'
                     })
                }} />
                </div>
                <p>Image URL:</p>
                <input type="text" onChange={(event) => this.handleImgChange(event)} />
                <p>Product Name:</p>
                <input type="text" onChange={(event) => this.handleNameChange(event)} />
                <p>Price:</p>
                <input type="text" onChange={(event) => this.handlePriceChange(event)} />
                <div className = "form_button">
                <button onClick={() => this.updateProduct()}>Save Changes</button>
                <button onClick={() => this.resetState()}>Cancel</button>
                <button onClick={() => this.createProduct()}>Add To Inventory</button>
                </div>
             </div>
         </div>    
    )
  }
}

export default Form;
    