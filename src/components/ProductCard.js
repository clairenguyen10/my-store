import './ProductCard.css';

function ProductCard( { image, title, price, brand, size}) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <p><strong>${price}</strong> - {title} {size}</p>
      <p className='brand'>{brand}</p>
    </div>
  );
}

export default ProductCard;