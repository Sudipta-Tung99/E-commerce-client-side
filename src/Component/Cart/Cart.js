import React, { useContext, useState } from 'react';
import {  mycontext } from '../../App';
import CartShow from './CartShow';
import './Cart.css'

const Cart = ({ pd }) => {
    
    const [count, setcount] = useContext(mycontext)

    const handle = (products) => {
        const exist = count.find((x) => x.id === products.id);
        if (exist) {
            const ite = (
                count.map((x) =>
                    x.id === products.id ? { ...exist, qty: exist.qty + 1 } : x
                )
            );
            setcount(ite)

        } else {
            setcount([...count, { ...products, qty: 1 }]);
        }

    };
    

    const total = count.reduce((a, c) => a + c.qty, 0);
    const totalprice = count.reduce((a, c) => a + c.qty * c.price, 0);
    const gst = totalprice / 10;
    let shipping = 0;
    if (totalprice > 50) {
        shipping = 0
    }
    else if (totalprice > 0) {
        shipping = 50;
    }


    return (
      <div>
          {count.length?
        <div className=' mt-12 flex text-center justify-around '>
            
            <div className=' cart-1 font-bold text-3xl'>
            
                <h2>All Cart Product</h2>
                {
                    count.map(pd => <CartShow product={pd} upd={handle} key={pd.id}></CartShow>)
                }
            </div>
            
            <div className='font-bold text-2xl cart-2 '>
                <h2 className='mt-3'>Cart Value</h2>
                <div className=' m-3 mt-5'>
                    <p>Product Count: {total}</p>
                    <p>Product Price: ${totalprice}</p>
                    <p>Shipping Charge: {shipping}</p>
                    <p>GST Tax: ${gst}</p><br />
                    <p>Total Price: ${totalprice + shipping + gst}</p>
                </div>
            </div>
            
            
        </div>:
        <p className=' text-6xl text-center mt-44'>Empty Cart</p>
}
        
        </div>
            
    );
};

export default Cart;