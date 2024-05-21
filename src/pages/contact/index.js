/* eslint-disable react/prop-types */
import { graphql } from 'gatsby'
import * as React from 'react'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import { useI18next, useTranslation } from 'gatsby-plugin-react-i18next'
import { SEO } from '../../components/seo'

const Contact = ({ data }) => {
  const { t } = useI18next()
  const contactImage = data.contactImage.childImageSharp.gatsbyImageData
  return (
    <div className="container h-full mx-auto m-8 p-8">
      <div className="flex justify-center">
        <div className="w-full xl:px-4">
          <h2 className="py-4 font-serif">
            {t('contact.title').toUpperCase()}
          </h2>
        </div>
      </div>
      <div className="flex justify-center flex-wrap">
        <div className="w-full desktop:w-1/2 xl:px-4 py-4">
          {t('contact.desc', { returnObjects: true }).map(
            (paragraph, index) => (
              <p className="font-sans" key={index}>
                {paragraph}
              </p>
            )
          )}
        </div>
        <div className="w-full desktop:w-1/2 content-center">
          <StaticImage
            src="../../images/contact.jpg"
            className="rounded-lg shadow-custom"
          />
        </div>
      </div>
    </div>
  )
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
    contactImage: file(relativePath: { eq: "contact.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 800, quality: 100, layout: CONSTRAINED)
      }
    }
  }
`
export default Contact

export const Head = (props) => {
  const dataLanguage = props.data.locales.edges.find(
    (e) => e.node.ns === 'index'
  ).node.data

  const parsedData = JSON.parse(dataLanguage)

  return <SEO title={parsedData.contact.title} pathname={location.pathname} />
}
