import React from 'react';

import { Link } from 'react-router';

import connectToStores from 'alt/utils/connectToStores';
import { Component } from 'react';
import CvStore from '../shared/stores/cv-store';
import CvActions from '../shared/actions/cv-actions';

@connectToStores
export default class App extends React.Component {

  static getStores() {
    return [CvStore];
  }

  static getPropsFromStores() {
    return CvStore.getState();
  }

  render () {

    return <div>
      <header>
        <h1>Andy May</h1>
        <p>Specialising in front-end, mobile and Umbraco CMS development.</p>
        <ul>
          <li><a class="email" href="mailto:andy@andy-may.co.uk">andy@andy-may.co.uk</a></li>
          <li><a class="phone" href="tel:+447977939282">07977 939282</a></li>
          <li><a class="linkedin" href="https://uk.linkedin.com/pub/andy-may/2b/381/912">LinkedIn</a></li>
          <li><a class="twitter" href="https://twitter.com/andyjohnmay">Twitter</a></li>
          </ul>
      </header>
      <nav>
        <ul>
          <li><Link to="/">CV</Link></li>
          <li><Link to="/projects">Projects</Link></li>
        </ul>
      </nav>
      <main id="main" role="main">
        {this.props.children}
      </main>
    </div>
  };
}