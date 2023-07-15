import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './components/fragments/Navbar';
import HomePage from './pages/home';
import CheckOutPage from './pages/checkout';
import ProductDetailPage from './pages/productdetail';
import PaymentPage from './pages/payment';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>  
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/detail/:id" element={<ProductDetailPage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
