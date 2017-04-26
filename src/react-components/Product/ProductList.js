import React from 'react';
import ProductItem from './ProductItem';

class ProductList extends React.Component {
  render() {
    return (
      <ul className="product-list">
        {
          this.props.productList.map(function(itemOnList, itemID) {
            return <ProductItem key={itemID} {...itemOnList}/>
          })
        }
      </ul>
    );
  }
}

export default ProductList;
