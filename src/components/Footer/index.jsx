import React from 'react'
import './style.scss'

const Footer = props => {
  const { copyright } = props.data.site.siteMetadata

  return (
    <div className="footer">
      <p className="footer__copyright">
        {copyright} {new Date().getFullYear()}
      </p>
    </div>
  )
}

export default Footer
