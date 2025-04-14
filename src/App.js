import './App.css';

import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import ProductDetail from './components/ProductDetail';
import Contact from './components/Contact';
import TopsPage from './pages/Tops';
import BottomsPage from './pages/Bottoms';
import DressesAndSkirtsPage from './pages/DressesSkirts';
import { products } from './data/products';


import '@fontsource/playwrite-us-modern';
import '@fontsource/pacifico';
import '@fontsource/puritan';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<ProductGrid />} />
          <Route path="/product/:id" element={<ProductDetail products={products} />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/tops" element={<TopsPage />} />
          <Route path="/bottoms" element={<BottomsPage />} />
          <Route path="/dresses" element={<DressesAndSkirtsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
