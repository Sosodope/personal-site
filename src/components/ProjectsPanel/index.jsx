import React from 'react'
import Link from 'gatsby-link'
import projectsPic from '../../assets/images/latest-projects.png'
import './style.scss'

class AboutPanel extends React.Component {
  render() {
    const { projects } = this.props.data.site.siteMetadata

    const projectsBlock = (
      <div>
        <h2 className="sidebar__author-title">{projects.name}</h2>
        <Link to="/projects">
          <img
            src={projectsPic}
            className="sidebar__author-photo"
            width="400"
            height="400"
            alt={projects.name}
          />
        </Link>
        <Link to="/projects" className="projects__page-button">
          Check out my projects
        </Link>
      </div>
    )

    return (
      <div className="sidebar">
        <div className="sidebar__inner">
          <div className="sidebar__author">{projectsBlock}</div>
        </div>
      </div>
    )
  }
}

export default AboutPanel
