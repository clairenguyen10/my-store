import './ProductCard.css';
import { Link } from 'react-router-dom';

function ProductCard( { id, image, title, price, brand, size, category}) {
  return (
    <Link to={`/product/${id}`} className="card">
      <div className="card-content">
        <img src={image} alt={title} />
        <p className='title'><strong>{title} - ${price}</strong></p>
        <p className='brand'>{brand}</p>
        <div className="size-attributes">
        <p>
          <span className="label">SIZE </span>
          <span className="value">{size}</span>
        </p>
        </div>
      </div>
    </Link>
    
  );
}

export default ProductCard;