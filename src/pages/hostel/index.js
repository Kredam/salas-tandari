import { graphql } from 'gatsby'
import * as React from 'react'

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
