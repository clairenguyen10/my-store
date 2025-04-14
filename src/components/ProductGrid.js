import ProductCard from './ProductCard';
import './ProductGrid.css';

const products = [
  {
    image: '', 
    title: 'FLORAL DRESS', 
    price: 20, 
    brand: 'Anthropologie',
    size: 'S',
  },
  // add more products here 

];

function ProductGrid() {
  return (
    <div className="product-section">
      <h2>NEW IN</h2>
      <div className="grid">
        {products.map((item, index) => (
          <ProductCard key={index} {...item} />
        ))}
      </div>
    </div>
  )
}

export default ProductGrid;