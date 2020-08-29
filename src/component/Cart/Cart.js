import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    // const total = cart.reduce( (total, courses) => total + courses.price , 0 )
    let total = 0;
    for(let i = 0; i< cart.length; i++){
        const course = cart[i];
        total = total + course.price;
    }

    return (
        <div className="Cart">
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <button className="cart-btn">Order Review</button>
        </div>
    );
};

export default Cart;