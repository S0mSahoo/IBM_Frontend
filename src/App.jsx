import './App.css';
import Nav from './components/Nav'; // Corrected import statement
import Donation from './components/Donation'; 
import Impacts from './components/Impacts';

import EdResources from './components/EdResources';
import Podcasts from './components/Podcasts';
import Articles from './components/Articles';
import Videos from './components/Videos';
import EBooks from './components/EBooks';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path='/' element={<EdResources/>} />
          <Route path='/donation' element={<Donation />} />
          <Route path='/Impacts' element={<Impacts />} />
          
          <Route path='/podcasts' element={<Podcasts/>} />
          <Route path='/articles' element={<Articles/>} />
          <Route path='/videos' element={<Videos/>} />
          <Route path='/ebooks' element={<EBooks/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
