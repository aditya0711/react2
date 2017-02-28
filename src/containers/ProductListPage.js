/**
 * Created by adityaaggarwal on 24/2/17.
 */
import React, { PropTypes, Component } from 'react';
import {
   selectListProducts
} from '../actions/mediaActions';
import { connect } from 'react-redux';
import '../styles/App.css';
import '../styles/common.css';

class ProductListPage extends Component{

  constructor(){
    super();
  }

  componentDidMount(){
    console.log("Component mounted")
    this.props.dispatch(selectListProducts());
  }
  render() {
    return(
    <div>
      <center>
      <h1>All Products</h1>
        <hr/>
              <div className="fixedDataTableLayout_main">
                <table className="table-bordered">
                  <thead>
                  <tr>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Product Description</th>
                  </tr>
                  </thead>
                  <tbody>
                  </tbody>
                </table>
              </div>
      </center>
    </div>
    )
  }
}
const mapStateToProps = ({ products }) => ({
  products: products[0]
});

ProductListPage.propTypes = {
  images: PropTypes.array,
  selectedImage: PropTypes.object,
  videos: PropTypes.array,
  selectedVideo: PropTypes.object,
  dispatch: PropTypes.func.isRequired
};
export default connect(mapStateToProps)(ProductListPage);
