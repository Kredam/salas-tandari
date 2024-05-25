/* eslint-disable react/prop-types */
import { graphql } from 'gatsby'
import React, { useEffect, useContext } from 'react'
import { SEO } from '../../components/seo'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import LayoutContext from '../../hooks/layout-context'

const Hostel = ({ data }) => {
  const { t } = useTranslation()

  const images = data.hostelImages.nodes.map((img) => getImage(img))
  return (
    <div className="container w-full mx-auto">
      <h2 className="font-semibold text-center font-serif">
        {t('hostel.title')}
      </h2>
      <div className="my-8 p-4 max-desktop:text-justify text-center">
        {t('hostel.desc', { returnObjects: true }).map((paragraph, index) => (
          <p className="font-sans" key={index}>
            {paragraph}
          </p>
        ))}
      </div>
      <div className="flex flex-wrap justify-center h-full w-full gap-4 my-8">
        {images.map((img, index) => (
          <div key={index}>
            <GatsbyImage
              image={img}
              alt="Hostel Room Image"
              className="rounded-lg shadow-custom"
            />
          </div>
        ))}
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
    hostelImages: allFile(filter: { relativeDirectory: { eq: "hostel" } }) {
      nodes {
        childImageSharp {
          gatsbyImageData(width: 300, quality: 100)
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

  console.log(props)

  const parsedData = JSON.parse(dataLanguage)

  return (
    <SEO
      title={parsedData.hostel.title}
      lng={props.pageContext.language}
      pathname={props.location.pathname}
    />
  )
}
