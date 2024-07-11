import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import SalesAreaLayout from './components/SalesAreaLayout';
import StorageAreaLayout from './components/StorageAreaLayout';
import CompoundingAreaLayout from './components/CompoundingAreaLayout';

function App() {
  return (
    <Router basename="/hd_findmymedi">
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/sales" element={<SalesAreaLayout />} />
          <Route path="/storage" element={<StorageAreaLayout />} />
          <Route path="/compounding" element={<CompoundingAreaLayout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;