import React from 'react'
import get from 'lodash/get'
import Link from 'gatsby-link'
import Links from '../Links'
import './style.scss'

class AboutPanel extends React.Component {
  render() {
    const { contactTitle, author, dzongkha } = this.props.data.site.siteMetadata

    const contactPageTitle = (
      <div>
        <h2 className="sidebar__panel-title">{dzongkha.name}</h2>
        <h4 className="sidebar__author-subtitle">{contactTitle}</h4>
      </div>
    )

    return (
      <div className="sidebar">
        <div className="sidebar__inner">
          <div className="sidebar__author">{contactPageTitle}</div>
          <div>
            <Links data={author} />
          </div>
        </div>
      </div>
    )
  }
}

export default AboutPanel
