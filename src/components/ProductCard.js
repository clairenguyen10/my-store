import './ProductCard.css';
import { Link } from 'react-router-dom';

function ProductCard( { id, image, title, price, brand, size}) {
  return (
    <Link to={`/product/${id}`}>
      <div className="card">
        <img src={image} alt={title} />
       <p><strong>${price}</strong> - {title} {size}</p>
       <p className='brand'>{brand}</p>
      </div>
    </Link>
    
  );
}

export default ProductCard;