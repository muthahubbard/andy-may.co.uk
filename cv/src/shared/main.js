import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link } from 'react-router';

import App from './components/App.jsx';
import Cv from './components/cv.jsx';
import Projects from './components/projects.jsx';

render((
  <Router> 
    <Route path="/" component={App}>
      <IndexRoute component={Cv} />
      <Route path="projects" component={Projects} />
    </Route>
  </Router>
), document.getElementById('cvApp'));