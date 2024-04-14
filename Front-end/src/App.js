import logo from './logo.svg';
import './App.css';
import NavBar from "../src/components/NavBar"
import AddProducts from './components/AddProducts';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from './components/Products';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/add" element={<AddProducts />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
