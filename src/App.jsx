import CustomNav from './components/CustomNav';
import CustomFooter from './components/CustomFooter';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroPage from './components/HeroPage';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div id="root">
        <CustomNav />
        <div className={`main-content ${location.pathname === '/' ? 'full-height-container' : ''}`}>
        {/* Routing paths using react-router-dom */}
          <Routes>
            <Route path="/hero" element={<HeroPage />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <CustomFooter />
      </div>
    </Router>
  );
}

export default App;