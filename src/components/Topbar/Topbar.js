import React from 'react';

import XKCDImg from './xkcd.png';
import './Topbar.css';


const Topbar = () =>
  <div className="Topbar">
    <img src={XKCDImg} alt="xkcd" />
  </div>

export default Topbar;