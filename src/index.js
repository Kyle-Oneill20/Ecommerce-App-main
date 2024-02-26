/*Copyright (c) 2023 Promineo Tech
    Author:  Promineo Tech Academic Team
    Subject: React Router Boiler Plate
-------------------------------------------*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min';
import Commerce from '@chec/commerce.js';

const commerce = new Commerce('{public_api_key', true);
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);


