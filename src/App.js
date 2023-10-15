import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Observ from './observ';
import Tinting from './tintingdet';
import ColorBanco from './colorantsbancodet';
import TintingNoom from './tintingnoombdet';
import ColorNoomBal from './colourantsnoomdet';
import './App.css'; // Import the CSS file

const App = () => {
  return (
    <Router>
      <div className="container">
        <div className="box">
          <Link to="/observ">Go to Observ Component</Link>
        </div>
        <div className="box">
          <Link to="/tinting">Go to Tinting Component</Link>
        </div>
        <div className="box">
          <Link to="/colorbanco">Go to Color Banco Component</Link>
        </div>
        <div className="box">
          <Link to="/tintingnoom">Go to Tinting Noom Component</Link>
        </div>
        <div className="box">
          <Link to="/colornoombal">Go to Colourants Noom Component</Link>
        </div>
      </div>

      <Routes>
        <Route path="/observ" element={<Observ />} />
        <Route path="/tinting" element={<Tinting />} />
        <Route path="/colorbanco" element={<ColorBanco />} />
        <Route path="/tintingnoom" element={<TintingNoom />} />
        <Route path="/colornoombal" element={<ColorNoomBal />} />
      </Routes>
    </Router>
  );
};

export default App;
