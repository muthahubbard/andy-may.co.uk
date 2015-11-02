import React from 'react';
import Profile from './profile.jsx';
import Employment from './employment.jsx';
import Skills from './skills.jsx';
import Education from './education.jsx';
import Interests from './interests.jsx';

export default class Cv extends React.Component {
  render() {
    return <div className="cv">
      <ul>
        <li>Profile</li>
        <li><a href="#employment">Employment</a></li>
        <li>Skills / Technologies</li>
        <li>Education</li>
        <li>Interests</li>
      </ul>
      <Profile />
      <Employment />
      <Skills />
      <Education />
      <Interests />
    </div>
  }
 }