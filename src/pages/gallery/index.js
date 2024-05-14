import * as React from 'react'
import { SEO } from '../../components/seo'
import { useTranslation } from 'react-i18next'
import { t } from 'i18next'
import { graphql } from 'gatsby'

const Gallery = () => {
  const { t } = useTranslation()

  return <div>{t('contact.title')}</div>
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
export default Gallery

export const Head = () => <SEO title={t('contact.title')} />
