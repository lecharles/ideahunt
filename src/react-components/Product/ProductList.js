import React from 'react';

class ProductList extends React.Component {
  render() {
    return (
      return (
        <ul className="product-list">
          {
            this.props.productList.map(function(itemFromList, itemID) {
              return <ProductItem key={itemID} {...itemFromList}/>
            })
          }
        </ul>
      );
    }
  }

export default ProductList;
