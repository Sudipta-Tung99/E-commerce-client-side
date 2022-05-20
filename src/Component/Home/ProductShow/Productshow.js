import React from 'react';
import { Button, Card } from 'react-bootstrap';

import { Link } from 'react-router-dom';


const Productshow = ({all,handle}) => {

    const {id,name,imageUrl,price}=all;
    




    return (
        <div className=' mt-20  inline-block px-4 drop-shadow-2xl'>
             <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" className=" max-h-72" src={imageUrl} />
                <Card.Body>
                    <Card.Title><Link to={'/product/'+id}>{name}</Link></Card.Title>
                    <Card.Text style={{color:'green',fontSize:'30px',padding:"10px"}}>
                    $ {price}
                    </Card.Text>
                    <div className='flex justify-between'>
                    <Button variant="outline-secondary" onClick={()=>handle(all)}>Add to Cart</Button>
                    <Button variant="outline-secondary">Buy Now</Button>
                    </div>
                </Card.Body>
            </Card> 
        </div>
    );
};

export default Productshow;