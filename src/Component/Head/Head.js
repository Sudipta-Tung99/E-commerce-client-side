import React, { useContext } from 'react';
import { Badge, Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { BiUserCircle } from "react-icons/bi";
import './Head.css';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { mycontext } from '../../App';



const Head = () => {
  const [count,setcount]=useContext(mycontext);
  
  return (
    <div >
      <Navbar bg="light" expand="lg" className='nav py-9'>
        <Container fluid>
          <Navbar.Brand className=' text-4xl font-bold'><Link to={'/'}>E-Commerce </Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className=' text-4xl'>
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >

            </Nav>
            <Form className="d-flex">
              <FormControl

                type="search"
                placeholder="Search"
                className="me-2 text-3xl"
                aria-label="Search"

              />
              <Button variant="outline-secondary">Search</Button>
            </Form>
            <Nav.Link style={{ padding: '0 20px', display: 'flex' }} ><Link to={'/login'}><BiUserCircle /> </Link></Nav.Link>
            {
              count.length?<Nav.Link style={{ padding: '0 15px', display: 'flex' }} id='cart'><Link to={'/cart'}><Badge bg="primary" className='text-xs mx-4 absolute'>{count.length}</Badge><AiOutlineShoppingCart /></Link></Nav.Link>:
              <Nav.Link style={{ padding: '0 15px', display: 'flex' }} id='cart'><Link to={'/cart'}><AiOutlineShoppingCart /></Link></Nav.Link>


            }
            
    
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  );
};

export default Head;