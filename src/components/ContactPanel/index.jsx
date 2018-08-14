import React from 'react'
import get from 'lodash/get'
import Link from 'gatsby-link'
import Links from '../Links'
import './style.scss'

class AboutPanel extends React.Component {
  render() {
    const { contactTitle, author } = this.props.data.site.siteMetadata

    const contactPageTitle = (
      <h2 className="sidebar__author-subtitle">
        {/* {contactTitle} */}
        Where to find me
      </h2>
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
