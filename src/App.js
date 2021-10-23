import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <Router>
      <Home/>
      
    </Router>
  );
}

export default App;
