import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';
import commerce from './lib/commerce';

class ProductsList extends Component {

    render() {
        const { products } = this.props;

        return (
            <>
                <div className="products" id="products">
                    {products.map((product) => (
                        <ProductItem
                            key={product.id}
                            product={product}
                            {...this.props}
                        />
                    ))}
                </div>
            </>
        )
    }
}

export default ProductsList;

ProductsList.propTypes = {
    products: PropTypes.array,
    handleAddToCart: PropTypes.func,
    onAddToCart: PropTypes.func,
};