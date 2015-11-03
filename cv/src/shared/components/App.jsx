import React from 'react';

import { Link } from 'react-router';

import { Component } from 'react';

export default class App extends React.Component {


  render () {

    return <div>
      <header>
        <h1>Andy May</h1>
        <p>Specialising in front-end, mobile and Umbraco CMS development.</p>
        <nav>
          <ul>
            <li><Link to="/">CV</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/projects">Recomendations</Link></li>
          </ul>
        </nav>
      </header>
      <main id="main" role="main">
        {this.props.children}
      </main>
      <footer>
        <p>This site has been built using React, Flux (AltJS), webpack, PostCSS. I hope to add Isomorphic React via NodeJS in the future. Full source code can be found on <a href="https://github.com/muthahubbard/andy-may.co.uk">GitHub</a></p>
        <ul>
          <li><a class="email" href="mailto:andy@andy-may.co.uk">andy@andy-may.co.uk</a></li>
          <li><a class="phone" href="tel:+447977939282">07977 939282</a></li>
          <li><a class="linkedin" href="https://uk.linkedin.com/pub/andy-may/2b/381/912">LinkedIn</a></li>
          <li><a class="twitter" href="https://twitter.com/andyjohnmay">Twitter</a></li>
        </ul>
      </footer>
    </div>
  };
}