/**
 * Created by adityaaggarwal on 24/2/17.
 */
import React, { PropTypes, Component } from 'react';
import {
  searchMediaAction, selectListProducts, addProductAction
} from '../actions/mediaActions';
import { connect } from 'react-redux';
import '../styles/App.css';
import '../styles/common.css';
import uuid from 'node-uuid';


class AddProductPage extends Component{

  constructor(){
    super();
    this.handleAddProduct = this.handleAddProduct.bind(this);

  }

  componentDidMount(){
    this.props.dispatch(selectListProducts());
    console.log(JSON.stringify(this.product));
    console.log(JSON.stringify(this.props.products));
  }
  handleAddProduct(e){
    e.preventDefault();
    var input = {
      name                        : this.nameInput.value,
      description                 : this.descriptionInput.value,
      price                       : this.priceInput.value,
      manufacturingDateInput      : this.manufacturingDateInput.value,
      manufacturingLocationInput  : this.manufacturingLocationInput.value,
      productId                   : uuid.v1()
    }
    console.log("Product: " + JSON.stringify(input));
    this.props.dispatch(addProductAction(input));
    e.target.reset();

  }

  render() {
    // TODO: Render Add Product Page here
    var nameInput, descriptionInput, manufacturingDateInput, manufacturingLocationInput, price;
    return (<div>
        <div>
              <form id="form1" onSubmit={this.handleAddProduct}>
                <center>
                  <h2 id="heading-form">Add Product</h2>
                  <hr id="hr1"/>
                  <br />

                <label>Product ID</label><br/>
                  <input disabled="true" type="text" id="id" name="name" ref={node => (this.productIdInput = node)}  /><br/><br/>

                <label>Product Name</label><br />
                  <input type="text" id="name" ref={node => (this.nameInput = node)}  /><br/><br/>

                <label>Product Description</label>
                  <br /><input type="text" id="description" ref={node => (this.descriptionInput = node)} /><br/><br/>

                <label>Manufacturing Date</label>
                  <br /><input type="date" id="date" ref={node => (this.manufacturingDateInput = node)}  /><br/><br/>

                <label>Manufacturing Location</label><br />
                  <input type="text" id="location" ref={node => (this.manufacturingLocationInput = node)}  /><br/><br/>

                <label>Price</label><br />
                  <input type="text" id="location" ref={node => (this.priceInput = node)}  /><br/><br/>

                  <button type="submit" id="btn1">
                    Add Product
                  </button>
                </center>
              </form>
              <br/><br/>
            </div>
          </div>)
  }
}
const mapStateToProps = ({ products }) => ({
  products: products[0]
});

AddProductPage.propTypes = {
  images: PropTypes.array,
  selectedImage: PropTypes.object,
  videos: PropTypes.array,
  selectedVideo: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
  product: PropTypes.products[0],
  products: PropTypes.products
};
export default connect(mapStateToProps)(AddProductPage);
