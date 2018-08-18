import React from 'react'
import get from 'lodash/get'
import Link from 'gatsby-link'
import './style.scss'

class AboutPanel extends React.Component {
  render() {
    const { projects } = this.props.data.site.siteMetadata

    const projectsBlock = (
      <div>
        <h2 className="sidebar__panel-title">{projects.name}</h2>
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
