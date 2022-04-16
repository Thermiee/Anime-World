import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import AnimeFacts from './pages/AnimeFacts';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/animefacts" element={<AnimeFacts />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
