/* eslint-disable react/prop-types */
import React, { useEffect, useContext } from 'react'
import { graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { SEO } from '../../components/seo'
import { useTranslation } from 'react-i18next'
import LayoutContext from '../../hooks/layout-context'

const Contact = () => {
  const { t } = useTranslation()

  return (
    <div className="container h-full mx-auto px-8">
      <div className="flex justify-center">
        <div className="w-full xl:px-4">
          <h2 className="py-4 font-serif">
            {t('contact.title').toUpperCase()}
          </h2>
        </div>
      </div>
      <div className="flex justify-center flex-wrap">
        <div className="w-full desktop:w-1/2 xl:px-4 py-4 text-justify">
          {t('contact.desc', { returnObjects: true }).map(
            (paragraph, index) => (
              <p className="font-sans" key={index}>
                {paragraph}
              </p>
            )
          )}
        </div>
        <div className="w-full desktop:w-1/2 flex justify-center">
          <StaticImage
            alt="Contact Image"
            src="../../images/contact.jpg"
            placeholder="blurred"
            width={400}
            quality={100}
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
  }
`
export default Contact

export const Head = (props) => {
  const dataLanguage = props.data.locales.edges.find(
    (e) => e.node.ns === 'index'
  ).node.data

  const parsedData = JSON.parse(dataLanguage)

  return (
    <SEO
      title={parsedData.contact.title}
      lng={props.pageContext.language}
      pathname={props.location.pathname}
    />
  )
}
