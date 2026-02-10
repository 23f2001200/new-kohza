import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CustomPlayer from './pages/CustomPlayer';
import Audit from './pages/Audit';
import DRM from './pages/DRM';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/custom-player" element={<CustomPlayer />} />
        <Route path="/audit" element={<Audit />} />
        <Route path="/drm" element={<DRM />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </Router>
  );
}

export default App;
