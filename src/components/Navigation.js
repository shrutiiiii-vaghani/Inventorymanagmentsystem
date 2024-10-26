import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav style={{
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom:"20px",
        backgroundColor:'whitesmoke',
        padding:'20px'
      }}>
      <Link to="/" style={{marginRight:"10px"}}>Inventory Dashboard</Link>
      <Link to="/suppliers">Supplier Management</Link>
    </nav>
  );
}

export default Navigation;
