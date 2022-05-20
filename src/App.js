import logo from './logo.svg';
import './App.css';

import HOme from './Component/Home/HOme';
import Head from './Component/Head/Head';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Component/Login/Login';
import Cart from './Component/Cart/Cart';
import ProductView from './Component/ProductView/ProductView';
import { createContext, createElement, useState } from 'react';

export const mycontext = createContext()
export const contextapi=createContext()

function App() {
const[count,setcount]=useState([]);




  return (
    <div>
      
      <mycontext.Provider value={[count,setcount]}>
       
      <BrowserRouter>
      <Head></Head>
      <Routes>
      <Route exact path="/" element={<HOme />} />
      <Route path="login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:id" element={<ProductView />} />
      </Routes>
      
      </BrowserRouter>
     
      </mycontext.Provider>
  
  
    </div>
  );
}

export default App;
