import { useState } from "react";
import axios from "axios";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList"
import OneProduct from "./components/OneProduct";
import NavBar from "./components/NavBar";
import EditForm from "./components/EditForm";
// import Main from './views/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<ProductForm />} />
          <Route path="/productList" element={<ProductList />} />
          <Route path="/oneProduct/:id" element={<OneProduct />} />
          <Route path="/edit/:id" element={<EditForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
