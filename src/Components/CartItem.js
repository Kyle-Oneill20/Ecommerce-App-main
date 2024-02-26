import React from "react";
import PropTypes from "prop-types";
import commerce from "./lib/commerce";

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {

    const handleUpdateCartQty = (lineItemId, quantity) => {
        onUpdateCartQty(lineItemId, quantity)
    }


    const handleRemoveFromCart = () => {
        onRemoveFromCart(item.id);
    }

    return (
        <div className="cart-item">
            <img className="cart-item_image" src={item.image.url} alt={item.name} />
            <div className="cart-item_details">
                <h4 className="cart-item_details-name">{item.name}</h4>
                <div className="cart-item_details-qty">
                    <button type="button" onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>-</button>
                    <p>{item.quantity}</p>
                    <button type="button" onClick={() =>handleUpdateCartQty(item.id, item.quantity + 1)}>+</button>
                </div>
                <div className="cart-item_details-price">{item.line_total.formatted_with_symbol}</div>
            </div>
            <button 
            type="button" 
            className="cart-item_remove"
            onClick={handleRemoveFromCart}
            >
                Remove
            </button>
        </div>
    );
};

CartItem.propTypes = {
    item: PropTypes.object,
    handleUpdateCartQty: PropTypes.func,
    onUpdateCartQty: () => {},
    onRemoveFromCart: () => {},


};

export default CartItem