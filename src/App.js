import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import '@fontsource/playwrite-us-modern';


function App() {
  return (
    <div className="App">
    <Header />
    <ProductGrid />
    </div>
  );
}

export default App;
