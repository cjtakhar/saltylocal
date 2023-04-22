import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Dashboard from './components/dashboard';
import Event from './components/events';
import Shop from './components/shop';
import Contact from './components/contact';
import Extras from './components/extras';
import News from './components/news';
import Login from './components/login';
import Members from './components/members';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
    < Navigation />
      <Routes>
        <Route path="/saltylocal" element={< Home />} />
        <Route path="/news" element={< News />} />
        <Route path="/about" element={< About />} />
        <Route path="/dashboard" element={< Dashboard />} />
        <Route path="/events" element={< Event />} />
        <Route path="/shop" element={< Shop />} />
        <Route path="/contact" element={< Contact />} />
        <Route path="/extras" element={< Extras />} />
        <Route path="/login" element={< Login />} />
        <Route path="/members" element={< Members />} />
      </Routes>
    </BrowserRouter>
  );
}