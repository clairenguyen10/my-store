import { useParams } from "react-router-dom";
import './ProductDetail.css';

function ProductDetail () {
  const { id } = useParams();

  const product = {
    id, 
    title: "Floral Dress",
    price: "$20", 
    size: "S",
    condition: "Lightly worn", 
    description: "This is a description of the dress...",
    images: ["/images/dress1.png"]
  };

  return (
    <div className="product-detail">
      <div className="product-images">
        {product.images.map((src, index) => (
          <img key={index} src={src} alt={product.title} />
        ))}
      </div>
      <div className="product-info">
        <h2>{product.price} - {product.size}</h2>
        <p><strong>Size:</strong> {product.size}</p>
        <p><strong>Condition:</strong> {product.condition}</p>
        <p className="description">{product.description}</p>
        <button className="add-to-bag">ADD TO BAG</button>
      </div>
    </div>
  );
}

export default ProductDetail;