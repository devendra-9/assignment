import ListProduct from './components/productList';
import Product from './components/product'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListProduct />}/>
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
