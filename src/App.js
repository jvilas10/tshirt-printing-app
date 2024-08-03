import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DesignPage from './pages/DesignPage';
import CartPage from './pages/CartPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/design" element={<DesignPage />} />
        {/* <Route path="/cart" element={<CartPage />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
