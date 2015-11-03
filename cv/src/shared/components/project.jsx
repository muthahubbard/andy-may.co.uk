import React from 'react';

export default class Project extends React.Component {


  render () {

    let projectLink;
    if(this.props.url) {
      projectLink = <a href={this.props.url}>View</a>;
    }

    return <li className="project">
      <img src={this.props.image} alt={this.props.name} />
      <div className="project__info">
        <h3>{this.props.name}</h3>
        <p className="project__description">{this.props.desc}</p>
        {projectLink}
      </div>
    </li>;
  }
}