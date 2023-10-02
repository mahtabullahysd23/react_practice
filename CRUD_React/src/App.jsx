import React, { createContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css'
import AddProducts from './components/AddProducts/AddProducts'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Products from './components/Products/Products'
import EditProduct from "./components/UpdateProducts/EditProduct";
import { useState } from "react";
export const productContet = createContext();


function App() {
  const [deleted, setDeleted] = useState(false);  
  return (
    <>
    <Router>
      <productContet.Provider value={{deleted,setDeleted}}>
      <Header />
      <Routes>
        <Route path="/" element={<Products />}/>
        <Route path="/add-book" element={<AddProducts />} />
        <Route path="/edit/:id" element={<EditProduct />} />
      </Routes>
      <Footer />
      </productContet.Provider>
    </Router>
    </>
  )
}

export default App
