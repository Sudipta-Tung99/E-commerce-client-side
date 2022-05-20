import React, { useContext, useState } from 'react';
import { mycontext } from '../../App';
import { AiOutlinePlus,AiOutlineMinus } from "react-icons/ai";
import { toContainHTML } from '@testing-library/jest-dom/dist/matchers';


const CartShow = ({product,upd}) => {
const [ count,setcount]=useContext(mycontext)
console.log(count);
const {id,name,imageUrl,price}= product



const delet =(product)=>{
    const exist = count.find((x) => x.id === product.id);
        if (exist.qty === 1) {
          setcount(count.filter((x) => x.id !== product.id));
        } else {
          setcount(
            count.map((x) =>
              x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
            )
          );
        }
      };



    return (
        
           
        <div className='flex text-center justify-around p-12'>
            
            {
               
             <div className='w-96 flex text-center justify-between py-8 '>
                 <div className='flex justify-between absolute left-9 '>
                 <img className=' h-36 ' src={imageUrl} alt="" />
                 <h3 className=' text-3xl font-bold mt-7'>{name}</h3>
                 </div>
                 <div className='flex absolute mr-4 mt-3'>
                     <p className='absolute right-24 mt-3' onClick={()=> delet (product)}> <AiOutlineMinus></AiOutlineMinus></p>
                     <p className=' border p-2 '>{product.qty}</p>
                     <p className='mt-2 p-2 'onClick={()=>upd(product)}> <AiOutlinePlus></AiOutlinePlus></p>
                 </div>
             </div>
}
              

        </div>
        
    );
};

export default CartShow;