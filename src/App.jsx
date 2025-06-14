// src/App.jsx

import { Routes, Route } from 'react-router-dom';
import DanoninoPage from './pages/DanoninoPage'; 

function App() {
  return (
    <Routes>
      <Route path="/danonino" element={<DanoninoPage />} />
    </Routes>
  );
}

export default App;