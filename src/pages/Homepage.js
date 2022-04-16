import React from 'react';
import Navbar from '../components/Navbar';
import AnimePage from './Anime';

function Homepage() {
  return (
    <div className="App">
      <Navbar />
      <AnimePage />
    </div>
  );
}

export default Homepage;
