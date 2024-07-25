import { Button } from "@material-tailwind/react";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import NoPage from "./Pages/NoPage/NoPage";
import ProductInfo from "./Pages/ProductInfo/ProductInfo";
import ScrollTop from "./Components/ScrollTop/ScrollTop";
import CartPage from "./Components/CartPage/CartPage";
import AllProducts from "./Pages/AllProducts/AllProducts";
import SignUp from "./Pages/Registretion/SignUp";
import LogIn from "./Pages/Registretion/LogIn";
import UserDashboard from "./Pages/User/UserDashboard";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import AddProduct from "./Pages/Admin/AddProduct";
import UpdateProduct from "./Pages/Admin/UpdateProduct";
import MyState from "./Context/MyState";

const App = () => {
  return (
      <MyState>
        <Router>
          <ScrollTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/*" element={<NoPage />} />
            <Route path="/productinfo" element={<ProductInfo />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/allproduct" element={<AllProducts />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/user-dashboard" element={<UserDashboard />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/updateproduct" element={<UpdateProduct />} />
          </Routes>
        </Router>
      </MyState>
  );
};

export default App;
