/* eslint-disable react/prop-types */
import React, { useEffect, useContext } from 'react'
import { SEO } from '../../components/seo'
import { chunk } from 'lodash'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import LayoutContext from '../../hooks/layout-context'

const Gallery = ({ data }) => {
  const images = data.galleryImages.nodes.map((img) => getImage(img))
  const map = chunk(images, Math.ceil(images.length / 4))
  return (
    <div className="container mx-auto mt-8 w-3/4 h-full">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          {map[0].map((img, index) => (
            <GatsbyImage
              key={index}
              image={img}
              alt="Gallery image"
              className="h-auto max-w-full rounded-lg shadow-custom"
            />
          ))}
        </div>
        <div className="grid gap-4">
          {map[1].map((img, index) => (
            <GatsbyImage
              key={index}
              image={img}
              alt="Gallery image"
              className="h-auto max-w-full rounded-lg shadow-custom"
            />
          ))}
        </div>
        <div className="grid gap-4">
          {map[2].map((img, index) => (
            <GatsbyImage
              key={index}
              image={img}
              alt="Gallery image"
              className="h-auto max-w-full rounded-lg shadow-custom"
            />
          ))}
        </div>
        <div className="grid gap-4">
          {map[3].map((img, index) => (
            <GatsbyImage
              key={index}
              image={img}
              alt="Gallery image"
              className="h-auto max-w-full rounded-lg shadow-custom"
            />
          ))}
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
    galleryImages: allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
      nodes {
        childImageSharp {
          gatsbyImageData(quality: 50, placeholder: BLURRED)
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
