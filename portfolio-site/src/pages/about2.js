import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const about2 = ({ data }) => {
  const text = data.markdownRemark.html
  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: text }} />
    </Layout>
  )
}

export default about2

export const query = graphql`
  query MyQuery {
    markdownRemark(frontmatter: { title: { eq: "About" } }) {
      html
    }
  }
`
