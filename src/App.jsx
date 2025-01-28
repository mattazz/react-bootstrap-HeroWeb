import CustomNav from './components/CustomNav';
import CustomFooter from './components/CustomFooter';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroPage from './components/HeroPage';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <div id="root">
        <CustomNav />
        <div className="main-content"> {/* Main content inside this  */}
          {/* Routing paths using react-router-dom */}
          <Routes>
            <Route path="/hero" element={<HeroPage />}/>
          </Routes>

          <Container className='border-danger border border-1 text-center'>
          <h1>Welcome to my site.</h1>
          <p>Click on the Hero link in the nav bar to continue.</p>
          </Container>

        </div>
        <CustomFooter />
      </div>
    </Router>
  );
}

export default App;