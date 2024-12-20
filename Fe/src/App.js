import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Services from "./components/Services";

import Education from './components/Education';

import WorkHistory from './components/WorkHistory';
import MajorProjects from './components/MajorProjects';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/about" element={<About />} /> 
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
         
          <Route path="/education" element={<Education />} />
         
          <Route path="/work-history" element={<WorkHistory />} />
          <Route path="/major-projects" element={<MajorProjects />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
