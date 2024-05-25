/* eslint-disable react/prop-types */
import React from 'react'
import useSiteMetadata from '../hooks/use-site-metadata'

const SEO = ({ title, description, pathname, type, children, lng }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
    defaultLang,
  } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
  }

  return (
    <>
      <html lang={lng || defaultLang} />
      <title>{seo.title}</title>
      <meta name="author" content="Kreidli Ádám" />
      <meta name="description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:type" content={type} />
      <meta property="og:description" content={seo.description} />
      {children}
    </>
  )
}

const Head = () => (
  <>
    <SEO />
  </>
)

export { SEO, Head }
