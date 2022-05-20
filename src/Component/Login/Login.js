
import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { AiFillGoogleCircle} from "react-icons/ai";

const Login = () => {
    const data = (e) =>{
        console.log(e.target.name );
        console.log( e.target.value);
    }
    return (
        <div className=' mt-20' >
            <Form className=' mt-20 text-2xl  m-auto w-2/4'>
            <Form.Group className="mb-3" controlId="formGroupName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter Name" name='name' onBlur={data} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email' onBlur={data} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password'onBlur={data}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupRe-pass">
                    <Form.Label>Re-Enter Password</Form.Label>
                    <Form.Control type="email" placeholder="Re-Enter Password" name='re-pass' onBlur={data} />
                </Form.Group>
                <Button variant="outline-primary" size="lg">Submit</Button>
                <div className="d-grid gap-2 p-4">
                 <Button variant="outline-primary" size="lg" >
                 <AiFillGoogleCircle className=' absolute text-3xl'/> Google Sine In
                    </Button>
                    
                </div>
            </Form>

        </div>
    );
};

export default Login;