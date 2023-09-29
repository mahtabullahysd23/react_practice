import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import './App.css'
import AddProducts from './components/AddProducts/AddProducts'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Products from './components/Products/Products'
import EditProduct from "./components/UpdateProducts/EditProduct";

function App() {
  return (
    <><Router>
      <Header />
      <Routes>
        <Route path="/" element={<Products />}/>
        <Route path="/home" element={<Products />}/>
        <Route path="/add-book" element={<AddProducts />} />
        <Route path="/edit/:id" element={<EditProduct />} />
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
