/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import { graphql } from 'gatsby'
import React, { useContext, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import LayoutContext from '../hooks/layout-context'
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";
import Shade from '../components/shade'
import { SEO } from '../components/seo';

const IndexPage = ({ data }) => {
  const { t } = useTranslation()
  const { setInverted, setShowHeaderPage } = useContext(LayoutContext)
  const procedureImages = data.proceduresImages.nodes

  useEffect(() => {
    setInverted(true)
    setShowHeaderPage(true)
  }, [])

  return <>
    <div className="container mx-auto m-8 p-8">
        <div className='flex justify-center flex-wrap'>
          <div className='w-full desktop:px-8'>
            <h2 className="py-4 font-serif">
              {t('introduction.title').toUpperCase()}
            </h2>
          </div>
        </div>
        <div className="flex justify-center flex-wrap">
          <div className="w-full desktop:w-1/2 desktop:px-8 py-4 text-justify">
            {t('introduction.desc', { returnObjects: true }).map(
              (paragraph, index) => (
                <p className="font-sans" key={`0${index}`}>{paragraph}</p>
              )
            )}
          </div>
          <div className="w-full h-full desktop:w-1/2 text-center">
            <StaticImage src="../images/introductions.jpg" placeholder='blurred' alt='Introductions Image' className="rounded-lg shadow-custom" />
          </div>
        </div>
      <h2 className="font-serif my-8">
        {t('procedure.title').toUpperCase()}
      </h2>
      <div className='flex justify-center flex-wrap'>
        {procedureImages.map((procedure, index) => (
            <div key={`1${index}`} className='p-4 mx-auto mobile:w-[350px] w-full text-center'>
              <GatsbyImage
                alt="Procedure Step Image"
                image={getImage(procedure)}
                className="rounded-lg shadow-custom" />
              <div className='my-2 text-center'>
                <p className="font-bold font-serif subtitle">
                  {t(`procedure.steps.${index}.title`)}
                </p>
              </div>
              <div className="text-center font-sans">
                <p className="body2">
                  {t(`procedure.steps.${index}.desc`)}
                </p>
              </div>
            </div>
        ))}
      </div>
    </div>
    <div className='w-full h-full relative text-white text-center'>
      <div className='h-screen'>
        <StaticImage
          alt='Outro Image'
          src="../images/outro.jpg"
          layout='fullWidth'
          placeholder='blurred'
          style={{
            height: "100vh",
          }} />
        <Shade />
      </div>
      <div className='absolute top-8 w-full mx-auto font-serif p-8'>
          {t('outro', { returnObjects: true }).map(
            (paragraph, index) => (
              <h1 key={`2${index}`} className='max-tablet:text-[36px]'>{paragraph.toUpperCase()}</h1>
            )
          )}
      </div>
    </div>
  </>;
}

export default IndexPage

export const query = graphql`query ($language: String!) {
  locales: allLocale(filter: {ns: {in: ["index"]}, language: {eq: $language}}) {
    edges {
      node {
        ns
        data
        language
      }
    }
  }
  proceduresImages: allFile(
    filter: {relativePath: {regex: "/procedures/procedure/"}}
  ) {
    nodes {
      childImageSharp {
        gatsbyImageData(width: 400, height: 400, layout: CONSTRAINED, placeholder: BLURRED)
      }
    }
  }
}`

export const Head = (props) => {
  return (
    <SEO
      lng={props.pageContext.language}
    />
  )
}