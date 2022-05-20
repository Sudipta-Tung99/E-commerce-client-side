import React, { useContext, useEffect, useState } from 'react';
import { contextapi, mycontext } from '../../../App';
import Cart from '../../Cart/Cart';
import Productshow from '../ProductShow/Productshow';
import { allProduct } from './Product';



const Products = () => {
  
    const [count, setcount] = useContext(mycontext)
    const [product, setproduct] = useState(allProduct);
    // const [cart,setcart] = useState([])
    const handle = (products) => {
        const exist = count.find((x) => x.id === products.id);
        if (exist) {
            const ite=(
              count.map((x) =>
                x.id === products.id ? { ...exist, qty: exist.qty + 1 } : x
              )
            );
            setcount(ite)
            
          } else {
            setcount([...count, { ...products, qty: 1 }]);
          }
           
          
        };
        
        // if(exist){
        //    const ite=
        //     product.map((x) =>
        //       x.id === products.id ? { ...exist, qty: exist.qty + 1 } : x
        //      )
        //    console.log(ite);
        // }
       
        // else {
        //   setcount([...count, { ...products, qty: 1 }]);
        // }
       
    

    return (
        <div className='  text-center'>
            {
                product.map(pd => <Productshow handle={handle} all={pd} key={pd.id}></Productshow>)

            }
        </div>
    );
};

export default Products;