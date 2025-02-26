import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Form } from "./Form";
import { Home } from './Home';
import { AllProducts } from './AllProducts';
import { Contactus } from './contactus';
import { Inorder } from './inorder';


export const Layout = () => {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index path="/" Component={Home}/>
      <Route path="/allproducts" Component={AllProducts}/>
      <Route path='/contactus' Component={Contactus} />
      <Route path="/form" Component={Form} />
      <Route path='/inorder'Component={Inorder} />
    </Routes>
  </BrowserRouter>
  </>
  )
}
