import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
            
      <Link to="/contact" className="contact-link"><strong>Contact</strong></Link>

      <h1><i>claire's closet</i>   𝜗𝜚 </h1>
      
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