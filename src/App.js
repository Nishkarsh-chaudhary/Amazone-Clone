import React from "react";
import "./App.css";
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home";
import Header from "./components/Header/Header"
import Checkout from "./components/Checkout/Checkout"
import SigIn from "./components/SignIn/SigIn";

import { Outlet } from "react-router-dom";



function Dashboard() {
  return (
    <div>
      <Home />
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
      <Header />
        <Routes>
          <Route path="/sigIN" element={<SigIn/>}>
          </Route>
          <Route path="/checkout" element={<Checkout/>}>
          </Route>
          <Route path="/" element={<Dashboard />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
export default App;