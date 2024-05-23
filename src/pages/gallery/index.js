/* eslint-disable react/prop-types */
import * as React from 'react'
import { SEO } from '../../components/seo'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useI18next } from 'gatsby-plugin-react-i18next'

const Gallery = ({ data }) => {
  const { t } = useI18next()
  const images = data.galleryImages.nodes.map((img) => getImage(img))
  return (
    <div className="container w-full mx-auto">
      <div className="flex flex-wrap justify-center h-full w-full gap-4 my-4">
        {images.map((img, index) => (
          <div key={index}>
            <GatsbyImage image={img} className="rounded-lg shadow-custom" />
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
    galleryImages: allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
      nodes {
        childImageSharp {
          gatsbyImageData(width: 300, quality: 100)
        }
      }
    }
  }
`

export default Gallery

export const Head = (props) => {
  const dataLanguage = props.data.locales.edges.find(
    (e) => e.node.ns === 'index'
  ).node.data

  const parsedData = JSON.parse(dataLanguage)

  return (
    <SEO title={parsedData.gallery.title} pathname={props.location.pathname} />
  )
}
