import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ backgroundColor: '#333', padding: '1rem', color: 'white', display: 'flex', justifyContent: 'space-between' }}>
      <h1>Product-Management-App</h1>
      <div>
        <Link to="/" style={{ color: 'white', marginRight: '1rem', textDecoration: 'none' }}>Home</Link>
        <Link to="/add-product" style={{ color: 'white', textDecoration: 'none' }}>Add Product</Link>
      </div>
    </nav>
  );
}

export default Navbar;
