import React from 'react';

function Dashboard({ items, onEdit, onDelete }) {

  return (
    <div className="dashboard">
      <h2 style={{textAlign:'center'}}>Inventory Dashboard</h2>
      <table style={{textAlign:'center',border:'2',cellPadding:'20px'}}>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Category</th>
            <th>Supplier</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} style={{ backgroundColor: item.quantity < 5 ? 'red' : 'green' }}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.category}</td>
              <td>{item.supplier}</td>
              <td>
                <button onClick={() => onEdit(item)}>Edit</button>
                <button onClick={() => onDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
