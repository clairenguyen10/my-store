import './ProductCard.css';
import { Link } from 'react-router-dom';

function ProductCard( { id, image, title, price, brand, size, category}) {
  return (
    <Link to={`/product/${id}`} className="card">
      <div className="card-content">
        <img src={image} alt={title} />
       <p><strong>${price}</strong> - {title}</p>
       <p className='brand'>{brand}</p>
       <p>Size: {size}</p>
      </div>
    </Link>
    
  );
}

export default ProductCard;