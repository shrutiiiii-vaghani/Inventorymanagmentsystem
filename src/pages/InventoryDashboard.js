import React, { useState, useEffect } from 'react';
import Dashboard from '../components/Dashboard';
import ItemForm from '../components/ItemForm';

function InventoryDashboard() {
  const [items, setItems] = useState(() => JSON.parse(localStorage.getItem('items')) || []);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [supplierFilter, setSupplierFilter] = useState('');
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const addItem = (item) => {
    if (editingItem) {
      // Update the existing item
      setItems(items.map((i) => (i.id === editingItem.id ? { ...item, id: editingItem.id } : i)));
      setEditingItem(null); 
      alert('edit succesfully'); // Reset after edit
    } else {
      // Add new item
      setItems([...items, { ...item, id: Date.now() }]);
      alert('add succesfully');
    }
  };

  const editItem = (item) => {
    setEditingItem(item);  // Set the item to edit
    
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));  // Remove item by ID
    alert('delete succesfully');

  };

  const handleSearch = (e) => setSearchTerm(e.target.value);
  const handleCategoryFilter = (e) => setCategoryFilter(e.target.value);
  const handleSupplierFilter = (e) => setSupplierFilter(e.target.value);

  const filteredItems = items.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (categoryFilter === '' || item.category === categoryFilter) &&
      (supplierFilter === '' || item.supplier === supplierFilter)
    );
  });

  const categories = [...new Set(items.map((item) => item.category))];
  const suppliers = [...new Set(items.map((item) => item.supplier))];

  return (
    <div
  style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  }}
>
  <input
    type="text"
    placeholder="Search items..."
    value={searchTerm}
    onChange={handleSearch}
    style={{ padding: '10px', marginBottom: '10px' }}
  />
  <select value={categoryFilter} onChange={handleCategoryFilter} style={{ padding: '10px', marginBottom: '10px' }}>
    <option value="">All Categories</option>
    {categories.map((category) => (
      <option key={category} value={category}>
        {category}
      </option>
    ))}
  </select>
  <select value={supplierFilter} onChange={handleSupplierFilter} style={{ padding: '10px', marginBottom: '10px' }}>
    <option value="">All Suppliers</option>
    {suppliers.map((supplier) => (
      <option key={supplier} value={supplier}>
        {supplier}
      </option>
    ))}
  </select>

  <ItemForm onSubmit={addItem} editingItem={editingItem} />
  <Dashboard items={filteredItems} onEdit={editItem} onDelete={deleteItem} />
</div>

  );
}

export default InventoryDashboard;
