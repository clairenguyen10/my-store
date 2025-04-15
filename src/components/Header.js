import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
            
      <Link to="/contact" className="contact-link">Contact</Link>

      <h1> 𐙚 claire's closet </h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/tops">Tops</Link>
        <Link to="/bottoms">Bottoms</Link>
        <Link to="/dresses">Dresses and Skirts</Link>
        <Link to="/cart">My Bag 🛍️</Link>
      </nav>
    </div>
    
  )
}

export default Header;