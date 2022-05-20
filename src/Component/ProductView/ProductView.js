import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { allProduct } from '../Home/Product/Product'
import ProductDetil from './ProductDetil';

const ProductView = () => {
    const { id } = useParams();
    const [products, setproducts] = useState(allProduct);
    const product = products.filter(pd =>pd.id==id);
    
   
    

    return (
        <div className=' mt-14'>
        {
            product.map(pd=><ProductDetil product={pd} key={pd.id}></ProductDetil>)
                
    }
        </div>
    );
};

export default ProductView;