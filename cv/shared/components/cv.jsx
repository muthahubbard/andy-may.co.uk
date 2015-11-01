import React from 'react';
import Profile from './profile.jsx';
import Employment from './employment.jsx';
import Skills from './skills.jsx';
import Education from './education.jsx';
import Interests from './interests.jsx';

export default class Cv extends React.Component {
  render() {
    return <div className="cv">
      <Profile />
      <Employment />
      <Skills />
      <Education />
      <Interests />
    </div>
  }
 }