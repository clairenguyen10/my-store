import ProductCard from './ProductCard';
import './ProductGrid.css';
import { products } from '../data/products';


function ProductGrid() {
  return (
    <div className="product-section">
      <h2>NEW IN!</h2>
      <br></br>
      <div className="grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            brand={product.brand}
            size={product.size}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;