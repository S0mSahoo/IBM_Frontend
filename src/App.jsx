import './App.css';
import Nav from './components/Nav'; // Corrected import statement
import Donation from './components/Donation';
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
          <Route path='/donation' element={<Donation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
