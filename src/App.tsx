import './App.css';
import './main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import About from './components/About';
import NewBill from './components/NewBill';
import Track from './components/Track';
import Contact from './components/Contact';

import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/newbill" element={<NewBill />} />
      <Route path="/track" element={<Track />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </>

  );
}

export default App;