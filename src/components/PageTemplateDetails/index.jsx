import React from 'react'
import AboutPanel from '../AboutPanel'
import './style.scss'
import Menu from '../Menu'

class PageTemplateDetails extends React.Component {
  render() {
    const page = this.props.data.markdownRemark
    const { menu } = this.props.data.site.siteMetadata

    return (
      <div>
        <Menu data={menu} />
        <div className="page__content">
          <AboutPanel {...this.props} />
          <div className="content">
            <div className="content__inner">
              <div className="page">
                <h1 className="page__title">{page.frontmatter.title}</h1>
                <div
                  className="page__body"
                  dangerouslySetInnerHTML={{ __html: page.html }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PageTemplateDetails
