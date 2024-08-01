import './App.css';
import Nav from './components/Nav'; // Corrected import statement
import Donation from './components/Donation'; 
import Impacts from './components/Impacts';
import Footer from './components/Footer';

import EdResources from './components/EdResources';
import Podcasts from './components/Podcasts';
import Articles from './components/Articles';
import Videos from './components/Videos';
import EBooks from './components/EBooks';
import Davailable from './components/Davailable';
import Dbooking from './components/Dbooking';
import About from './components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Homepage from './components/Homepage';
import HealthCare from './components/HealthCare';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/healthcare' element={<HealthCare />}></Route>
          <Route path='/donation' element={<Donation />} />
          <Route path='/impacts' element={<Impacts />} />
          <Route path='/education' element={<EdResources />}></Route>
          <Route path='/podcasts' element={<Podcasts/>} />
          <Route path='/articles' element={<Articles/>} />
          <Route path='/videos' element={<Videos/>} />
          <Route path='/ebooks' element={<EBooks/>} />
          <Route path='/booking' element={<Davailable/>} />
          <Route path='/appointment' element={<Dbooking/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
    
  );
}

export default App;
