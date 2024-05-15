'use client';
import React from 'react';
import { useContext } from 'react';
import { GlobalContext } from '@/context/GlobalContext';


function Cart() {
    const { cart, removeFromCart, clearCart } = useContext(GlobalContext);

    return (
        <>
            <h2>Cart</h2>
            <ul>
                {
                    cart.map((product) => (
                    <li key={product.id}>
                        {product.id}
                        {product.name} - ${product.price} 
                        <button onClick={() => removeFromCart(product.id)}>Remove</button>
                    </li>
                )
                )
                }
            </ul>
            <button onClick={clearCart}>Clear Cart</button>
        </>
    );
}

export default Cart;
