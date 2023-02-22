import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
/*import Crud from "./components/pages/Crud";*/
import AddUser from "./components/crud/AddUser";
import EditUser from "./components/crud/EditUser";
import User from "./components/crud/User";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sign-up" element={<SignUp />} />
           <Route exact path="/components/crud/add" element={<AddUser />} />
          <Route exact path="/components/crud/edit/:id" element={<EditUser />} />
          <Route exact path="/components/crud/:id" element={<User />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
