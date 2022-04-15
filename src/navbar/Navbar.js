import React from 'react';
import { BsMic } from 'react-icons/bs';
import { IoSettingsOutline } from 'react-icons/io5';
import './Navbar.css';

const Navbar = () => (
  <div className="navbar">
    <h1>2022</h1>
    <h2>stats</h2>
    <BsMic />
    <div>
      <IoSettingsOutline />
    </div>
  </div>
);

export default Navbar;
