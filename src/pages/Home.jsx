const Home = ({ products }) => {
  return (
    <div style={{ padding: '1rem' }}>
      <h2>Product Dashboard</h2>
      <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '1rem' }}>
            <img src={product.image} alt={product.title} style={{ width: '100px', height: '100px' }} />
            <h4>{product.title}</h4>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating.rate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
