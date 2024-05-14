import { graphql } from 'gatsby'
import * as React from 'react'

const Contact = () => {
  return <div>Contact</div>
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
export default Contact
