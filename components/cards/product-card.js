import React from 'react';
function ProductCard(props){
    const stockStatus= props.stockStatus;
    if(stockStatus === 'true'){
        return(
            <>
                <div className="card">
                    <div className="card-body">
                    <img src={props.imageUrl} />
                    <b>{props.name}</b> <br/>
                    <b>${props.price}</b>
                    </div>
                </div>
            </>
           );
    } else{ 
        return(
            <>
                <div className="product-card">
                    <div className='productStatus stock-text'>Out of Stock</div>
                    <div className="container m-0">
                    <img src={props.imageUrl} />
                    <div className='product-name'>{props.name}</div>
                    <div className='product-price pt-2'>${props.price}</div>
                    <div className='pt-3'>
                        <textarea className='product-text-area' rows="1" cols="2"/> 
                        <button className='product-button'>Add To Cart</button>
                    </div>
                    </div>
                </div>
            </>
           );
    }
   
}

export default ProductCard;