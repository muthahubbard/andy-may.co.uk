import React from 'react';

import connectToStores from 'alt/utils/connectToStores';
import CvStore from '../stores/cv-store';
import CvActions from '../actions/cv-actions';

@connectToStores
export default class Skills extends React.Component {

  static getStores() {
    return [CvStore];
  }

  static getPropsFromStores() {
    return CvStore.getState();
  }

  componentDidMount() {
    CvActions.getData();
  }

  render () {

    let coreSkills = this.props.skills.filter(skill => skill.level === 1).map( (skill, index) => {
      return <li key={skill.id}>{skill.name}</li>;
    });

    let otherSkills = this.props.skills.filter(skill => skill.level === 2).map( (skill, index) => {
      return <li key={skill.id}>{skill.name}</li>;
    });    

    return <section>
      <h2>Skills / Technologies</h2>
      <ul>
      {coreSkills}
      </ul>
      <p>Limited experience</p>
      <ul>
      {otherSkills}
      </ul>
    </section>
  };
}