// src/App.jsx

import { Routes, Route } from 'react-router-dom';
import DanoninoPage from './pages/DanoninoPage'; 
import LernaPage from './pages/LernaPage'; 

function App() {
  return (
    <Routes>
      <Route path="/danonino" element={<DanoninoPage />} />
      <Route path="/lerna" element={<LernaPage />} />
    </Routes>
  );
}

export default App;