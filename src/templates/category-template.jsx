import React from 'react'
import Helmet from 'react-helmet'
import AboutPanel from '../components/AboutPanel'
import CategoryTemplateDetails from '../components/CategoryTemplateDetails'

class CategoryTemplate extends React.Component {
  render() {
    const { title } = this.props.data.site.siteMetadata
    const { category } = this.props.pathContext

    return (
      <div>
        <Helmet title={`${category} - ${title}`} />
        <AboutPanel {...this.props} />
        <CategoryTemplateDetails {...this.props} />
      </div>
    )
  }
}

export default CategoryTemplate

export const pageQuery = graphql`
  query CategoryPage($category: String) {
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
          linkedin
          twitter
          github
          codepen
        }
      }
    }
    allMarkdownRemark(
      limit: 1000
      filter: {
        frontmatter: {
          category: { eq: $category }
          layout: { eq: "post" }
          draft: { ne: true }
        }
      }
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
