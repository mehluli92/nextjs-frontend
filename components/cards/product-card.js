import { GlobalContext } from '@/context/GlobalContext';
import React from 'react';
import { useState, useEffect, useContext } from 'react';

function ProductCard(props){
    const stockStatus = props.stockStatus;
    const { addToCart, cart } = useContext(GlobalContext);
    let product = {name:props.name, src:props.imageUrl, price:props.price};

    const handleAddToCart = () => {
        addToCart(product);
    };

    if(stockStatus === 'true'){
        return(
            <>
                <div class="card">
                    <img src="https://fakeimg.pl/600x400" alt="product1" class="card-img-top"/>
                        <div class="card-body">
                            <h5 class="card-title">Product 1</h5>
                            <p class="card-text">$ Price here</p>
                            {/* <!-- place quantity box next to add to cart --> */}
                            <div class="d-flex">
                            <input type="number" class="form-control quantity" value="1"/>
                                <a href="#" class="btn secondary-box-btn">Add to cart</a>
                        </div>
                    </div>
                </div>
            </>
           );
    } else{ 
        return(
            <>
                <div className="product-card">
                    
                    <div className='productStatus stock-text'>Out of Stock </div>
                    <div className="container m-0">
                    <img src={props.imageUrl} />
                    <div className='product-name'>{props.name}</div>
                    <div className='product-price pt-2'>${props.price}</div>
                    <div className='pt-3'>
                        <textarea className='product-text-area' rows="1" cols="2" onChange={(e)=>setnuMToAdd(e.target.value)}/> 
                        <button className='product-button' onClick={handleAddToCart} >Add To Cart</button>
                    </div>
                    </div>
                </div>
            </>
           );
    }
   
}

export default ProductCard;