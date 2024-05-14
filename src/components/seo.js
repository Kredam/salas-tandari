/* eslint-disable react/prop-types */
import React from 'react'
import { useSiteMetadata } from 'hooks'

const SEO = ({ title, description, pathname, type, children }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
  } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
  }
  return (
    <>
      <title>{seo.title}</title>
      <meta name="author" content="Kreidli Ádám" />
      <meta name="description" content={description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:type" content={type} />
      <meta property="og:description" content={seo.description} />
      {children}
    </>
  )
}

const Head = () => <SEO />

export { SEO, Head }
