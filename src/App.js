import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Index from './components/pages/Index';

import Games from './components/pages/Games';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/gamaesstrore/" exact element={<Index />} />
        
        <Route path="/gamaesstrore/Juegos" element={<Games />} />
       
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
