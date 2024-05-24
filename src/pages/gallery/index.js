/* eslint-disable react/prop-types */
import React, { useEffect, useContext } from 'react'
import { SEO } from '../../components/seo'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import LayoutContext from '../../hooks/layout-context'

const Gallery = ({ data }) => {
  const { setShowHeaderPage } = useContext(LayoutContext)

  useEffect(() => {
    setShowHeaderPage(false)
  }, [])

  const images = data.galleryImages.nodes.map((img) => getImage(img))
  return (
    <div className="container w-full h-full mx-auto">
      <div className="flex flex-wrap justify-center h-full w-full gap-4 my-4">
        {images.map((img, index) => (
          <div key={index}>
            <GatsbyImage
              image={img}
              alt="Gallery image"
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
    <SEO
      title={parsedData.gallery.title}
      lng={props.pageContext.language}
      pathname={props.location.pathname}
    />
  )
}
