import React, { useState } from 'react';

function SupplierForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, contact });
    setName('');
    setContact('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Supplier Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Contact Details" value={contact} onChange={(e) => setContact(e.target.value)} />
      <button type="submit">Add Supplier</button>
    </form>
  );
}

export default SupplierForm;
