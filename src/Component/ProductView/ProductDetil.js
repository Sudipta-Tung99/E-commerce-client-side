import React from 'react';
import { Button } from 'react-bootstrap';

const ProductDetil = ({product}) => {
   
    const {name,imageUrl}= product;

    return (
        <div className=' w-full'>
             <div className="max-w-md mx-auto w-4/5 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                    <div className="md:shrink-0">
                        <img className="h-96 w-96" src={imageUrl} alt="Man looking at item at a store"/>
                    </div>
                    <div className="p-8">

                        <p  className="block mt-1 text-3xl leading-tight font-medium text-black hover:underline">{name}</p>
                        <p className="mt-2 text-slate-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
                       <div className='flex justify-between mt-36'>
                        <Button variant="outline-info">Add To Cart</Button>
                        <Button variant="outline-info">Buy Now</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetil;