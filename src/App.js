import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SalesAreaLayout from './components/SalesAreaLayout';
import StorageAreaLayout from './components/StorageAreaLayout';

function App() {
  return (
    <Router basename="/hd_findmymedi">
      <div className="App">
        <Routes>
          <Route path="/" element={<SalesAreaLayout />} />
          <Route path="/storage" element={<StorageAreaLayout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;