import React, { useState, useEffect } from 'react';

function ItemForm({ onSubmit, editingItem }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [category, setCategory] = useState('');
  const [supplier, setSupplier] = useState('');

  useEffect(() => {
    if (editingItem) {
      setName(editingItem.name);
      setQuantity(editingItem.quantity);
      setCategory(editingItem.category);
      setSupplier(editingItem.supplier);
    }
  }, [editingItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, quantity, category, supplier });
    setName('');
    setQuantity(0);
    setCategory('');
    setSupplier('');
  };

  return (
   
    <div style={{textAlign:'center'}}>
         <h2>Add Your Details</h2>
        <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Item Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="text"
        placeholder="Supplier"
        value={supplier}
        onChange={(e) => setSupplier(e.target.value)}
      />
      <button type="submit">{editingItem ? 'Update Item' : 'Add Item'}</button>
    </form> 
    </div>
  );
}

export default ItemForm;
