import React from 'react'

class Footer extends React.Component {
  render() {
    const { copyright } = this.props.data.site.siteMetadata

    return (
      <div className="footer">
        <div className="footer__inner">
          <p className="footer__copyright">{copyright}</p>
        </div>
      </div>
    )
  }
}

export default Footer
