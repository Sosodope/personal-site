import React from 'react'
import Link from 'gatsby-link'
import profilePic from '../../pages/photo.jpg'
import './style.scss'

class AboutPanel extends React.Component {
  render() {
    const { author, subtitle } = this.props.data.site.siteMetadata

    const authorBlock = (
      <div className="sidebar__author-content">
        <h1 className="sidebar__author-title">
          <Link className="sidebar__author-title-link" to="/">
            {author.name}
          </Link>
        </h1>
        <Link to="/">
          <img
            src={profilePic}
            className="sidebar__author-photo"
            width="75"
            height="75"
            alt={author.name}
          />
        </Link>
        <p className="sidebar__author-subtitle">{subtitle}</p>
      </div>
    )

    return (
      <div className="sidebar">
        <div className="sidebar__inner">
          <div className="sidebar__author">{authorBlock}</div>
        </div>
      </div>
    )
  }
}

export default AboutPanel
