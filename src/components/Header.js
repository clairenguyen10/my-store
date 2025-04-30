import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
            
      <Link to="/contact" className="contact-link">Contact</Link>

      <h1><i></i> 𐙚 claire's closet </h1>
      
      <nav className="nav-bar">
        <Link to="/"><strong>HOME</strong></Link>
        <Link to="/tops"><strong>TOPS</strong></Link>
        <Link to="/bottoms"><strong>BOTTOMS</strong></Link>
        <Link to="/dresses"><strong>DRESSES AND SKIRTS</strong></Link>
        <Link to="/cart"><strong>MY BAG 🛍️</strong></Link>
      </nav>
    </div>
    
  )
}

export default Header;