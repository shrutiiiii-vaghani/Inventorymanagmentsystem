import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InventoryDashboard from './pages/InventoryDashboard';
import SupplierManagement from './pages/SupplierManagement';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<InventoryDashboard />} />
        <Route path="/suppliers" element={<SupplierManagement />} />
      </Routes>
    </Router>
  );
}

export default App;
