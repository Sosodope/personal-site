import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Post from '../components/Post'
import AboutPanel from '../components/AboutPanel'
import ContactPanel from '../components/ContactPanel'
import ProjectsPanel from '../components/ProjectsPanel'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

class IndexRoute extends React.Component {
  render() {
    const items = []
    const { title, subtitle, menu } = this.props.data.site.siteMetadata
    const posts = this.props.data.allMarkdownRemark.edges
    posts.forEach(post => {
      items.push(<Post data={post} key={post.node.fields.slug} />)
    })
    const isMore = get(location, 'pathname', '/') === '/more'
    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={subtitle} />
        </Helmet>
        <Menu data={menu} />
        <div className="panels">
          <AboutPanel {...this.props} />
          <ProjectsPanel {...this.props} />
          <ContactPanel {...this.props} />
        </div>
        {isMore ? (
          <div className="content">
            <div className="content__inner">{items}</div>
          </div>
        ) : (
          <Footer />
        )}
      </div>
    )
  }
}

export default IndexRoute

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        subtitle
        copyright
        menu {
          label
          path
        }
        author {
          name
          email
          telegram
          twitter
          github
          rss
          vk
        }
      }
    }
    allMarkdownRemark(
      limit: 1000
      filter: { frontmatter: { layout: { eq: "post" }, draft: { ne: true } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
            categorySlug
          }
          frontmatter {
            title
            date
            category
            description
          }
        }
      }
    }
  }
`
