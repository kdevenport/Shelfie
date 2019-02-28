import React, { Component } from 'react';
import axios from 'axios';


class Form extends Component{
    constructor(){
        super();

        this.state = {
            imageUrl: "",
            productName: "",
            price: ""
        }
    }
    render(){
        return(
            <div className = "form">
                <div>
                    <input placeholder="Image URL"></input>
                    <input placeholder="Product Name"></input>
                    <input placeholder="Price"></input>
                </div>
                <div>
                    <button>Cancel</button>
                    <button>Add to Inventory</button>
                </div>
            </div>
        )
    }
}
export default Form;

//Add a name and price for the product
//Add an image for the product
//image preview that displays
//provide default image if they don't provide one
//the image container should remain the same
//Should be able to click the 'Cancel' button to clear all boxes
//a user should be able to click the 'add inventory' inventory button