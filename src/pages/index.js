import { graphql } from 'gatsby'
import * as React from 'react'
import { useTranslation } from 'react-i18next'

const IndexPage = () => {
  const { t } = useTranslation()

  return (
    <div>
      <div>{t('introduction.title')}</div>
    </div>
  )
}

export default IndexPage

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

export { Head } from '../components/seo'
