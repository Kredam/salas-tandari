/* eslint-disable react/prop-types */
import { graphql } from 'gatsby'
import * as React from 'react'
import { SEO } from '../../components/seo'

const Hostel = () => {
  return <main>Hostel</main>
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["index"] }, language: { eq: $language } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`

export default Hostel

export const Head = (props) => {
  const dataLanguage = props.data.locales.edges.find(
    (e) => e.node.ns === 'index'
  ).node.data

  const parsedData = JSON.parse(dataLanguage)

  return <SEO title={parsedData.gallery.title} pathname={location.pathname} />
}
