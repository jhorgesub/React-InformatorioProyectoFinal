import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Details from "./pages/Details";
import NotMatch from "./pages/NotMatch";

export default function App() {
  return (
    <div className="App">
      <div className="h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="*" element={<NotMatch />} />
        </Routes>
      </div>
    </div>
  );
}
