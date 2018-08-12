import React from 'react'
import Helmet from 'react-helmet'
import Post from '../components/Post'
import Sidebar from '../components/Sidebar'
import Menu from '../components/Menu'

class IndexRoute extends React.Component {
  render() {
    const items = []
    const { title, subtitle, menu } = this.props.data.site.siteMetadata
    const posts = this.props.data.allMarkdownRemark.edges
    posts.forEach(post => {
      items.push(<Post data={post} key={post.node.fields.slug} />)
    })

    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={subtitle} />
        </Helmet>
        <Menu data={menu} />
        <div className="panels">
          <Sidebar {...this.props} />
          <Sidebar {...this.props} />
          <Sidebar {...this.props} />
        </div>
        <div className="content">
          <div className="content__inner">{items}</div>
        </div>
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
