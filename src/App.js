import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Dashboard from './components/dashboard';
import Event from './components/events';
import Shop from './components/shop';
import Contact from './components/contact';
import Extras from './components/extras';
import News from './components/news';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/saltylocal" element={< Home />} />
        <Route path="/news" element={< News />} />
        <Route path="/about" element={< About />} />
        <Route path="/dashboard" element={< Dashboard />} />
        <Route path="/events" element={< Event />} />
        <Route path="/shop" element={< Shop />} />
        <Route path="/contact" element={< Contact />} />
        <Route path="/extras" element={< Extras />} />
      </Routes>
    </BrowserRouter>
  );
}