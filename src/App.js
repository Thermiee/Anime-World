import React from 'react';
import Navbar from './components/Navbar';
import AnimePage from './pages/Anime';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <AnimePage />
    </div>
  );
}

export default App;
