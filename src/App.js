import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import SalesAreaLayout from './components/SalesAreaLayout';
import StorageAreaLayout from './components/StorageAreaLayout';
import CompoundingAreaLayout from './components/CompoundingAreaLayout';
import ProductManager from './components/ProductManager';
import './App.css';

function App() {
  return (
    <Router basename="/hd_findmymedi">
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/sales" element={<SalesAreaLayout />} />
          <Route path="/storage" element={<StorageAreaLayout />} />
          <Route path="/compounding" element={<CompoundingAreaLayout />} />
          <Route path="/products" element={<ProductManager />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;