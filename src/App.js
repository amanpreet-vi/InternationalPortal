import React from "react";
import Homepage from "./components/Homepage";
import Individual from "./components/Individual";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/individual" element={<Individual />} />
      </Routes>
    </BrowserRouter>
  );
}
