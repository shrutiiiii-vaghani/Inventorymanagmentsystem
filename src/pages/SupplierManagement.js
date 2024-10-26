import React, { useState, useEffect } from 'react';
import SupplierForm from '../components/SupplierForm';

function SupplierManagement() {
  const [suppliers, setSuppliers] = useState(() => JSON.parse(localStorage.getItem('suppliers')) || []);

  useEffect(() => {
    localStorage.setItem('suppliers', JSON.stringify(suppliers));
  }, [suppliers]);

  const addSupplier = (supplier) => {
    setSuppliers([...suppliers, { ...supplier, id: Date.now() }]);
  };

  return (
    <div>
      <h2>Supplier Management</h2>
      <SupplierForm onSubmit={addSupplier} />
      <ul>
        {suppliers.map((supplier) => (
          <li key={supplier.id}>{supplier.name} - {supplier.contact}</li>
        ))}
      </ul>
    </div>
  );
}

export default SupplierManagement;
