import React from 'react';

import connectToStores from 'alt/utils/connectToStores';
import CvStore from '../stores/cv-store';
import CvActions from '../actions/cv-actions';

import Project from './project.jsx';

@connectToStores
export default class Projects extends React.Component {

  static getStores() {
    return [CvStore];
  }

  static getPropsFromStores() {
    return CvStore.getState();
  }

  componentDidMount() {
    CvActions.getData();
  }

  render() {

    let projects = this.props.projects.map( (project, index) => {
      return <Project name={project.name} desc={project.desc} url={project.url} image={project.image}  />;
    });

    return <section>
      <h2>PROJECTS</h2>
      {projects}
      </section>
      ;
  }
}