import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Removed Router
import Header from './components/Header';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import MobileIcons from './components/MobileIcons';
import LoginPage from './components/EloginPage'; // Import LoginPage
import RegistrationForm from './components/RegistrationForm'; // Import RegistrationForm
import HomeComponent from './components/Home';
import ProductPage from './components/SingleProductPage';
import SearchComponent from './components/SearchProducts';

function App() {
  return (
    <div className="font-sans bg-gray-100 min-h-screen h-100% bg-gradient-to-r from-blue-200 to-purple-200 ">
      <Header />
      <main style={{marginTop:''}} className="container mx-auto px-4 py-10  ">
        <Routes>
          {/* Define your routes here */}
          <Route path="/login-page" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/" element={<HomeComponent />} />
          <Route path="/login-page" element={<ProductList />} />
          <Route path="/productpage" element={<ProductPage />} />
          <Route path="/searchPage" element={<SearchComponent />} />
        </Routes>
      </main>
      <Footer />
      <MobileIcons />
    </div>
  );
}

export default App;
