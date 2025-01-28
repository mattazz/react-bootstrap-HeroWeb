import CustomNav from './components/CustomNav';
import CustomFooter from './components/CustomFooter';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import HeroPage from './components/HeroPage';
import Home from './components/Home';

function App() {
  const location = useLocation();

  return (
    <div id="root">
      <CustomNav />
      <div className={`main-content ${location.pathname === '/' ? 'full-height-container' : ''}`}>
        <Routes>
          <Route path="/hero" element={<HeroPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <CustomFooter />
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;