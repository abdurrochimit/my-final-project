import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './components/fragments/Navbar';
import HomePage from './pages/home';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>  
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/" element={<div>Home</div>} /> */}
        <Route path="/contact" element={<div>Contact</div>} />
        <Route path="/profil" element={<div>Profil</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
