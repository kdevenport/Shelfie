import React, { Component } from 'react';
import axios from 'axios';


class Form extends Component{
    constructor(){
        super();

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
        const {imgURL, name, price} = this.state;

        const product = {
            imgURL: imgURL,
            name: name,
            price: price
        }
        axios.post('/api/product', product).then(response => {
            this.props.history.push('/');
        });

        this.resetState();
    }
    updateProduct = () => {
        const {id} = this.props.match.params;
        axios.put(`/api/update/${id}`, this.state).then(response =>{
            this.props.history.push('/');
        })
    }


  render() {
      console.log(this.state)
    return (
        <div>
            <div>
                <img src={this.state.imgURL} onError={() => {
                     this.setState({
                        imgURL: 'https://www.marylandhillel.org/wp-content/plugins/bc-flex-content/images/default-no-image.jpg'
                     })
                }} />
                <input type="text" placeholder="name" onChange={(event) => this.handleNameChange(event)} />
                <input type="text" placeholder="img url" onChange={(event) => this.handleImgChange(event)} />
                <input type="text" placeholder="price" onChange={(event) => this.handlePriceChange(event)} />
                <button onClick={() => this.updateProduct()}>Save Changes</button>
                <button onClick={() => this.createProduct()}>Add To Inventory</button>
                <button onClick={() => this.resetState()}>Cancel</button>
             </div>
         </div>    
    )
  }
}

export default Form;
    