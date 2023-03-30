import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Dashboard from './components/dashboard';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/saltylocal" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}