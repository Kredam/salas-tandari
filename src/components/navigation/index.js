/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { useI18next } from 'gatsby-plugin-react-i18next'
import styled from '@emotion/styled/macro'
import LayoutContext from '../../hooks/layout-context'
import { StaticImage } from 'gatsby-plugin-image'

import clsx from 'clsx'
import Shade from '../shade'

// eslint-disable-next-line react/prop-types

const StyledListItem = styled.a`
  &:before {
    position: absolute;
    width: 2px;
    height: 100%;
    left: 0px;
    top: 0px;
    content: '';
    background: #000000;
    opacity: 0.1;
    transition: all 0.3s;
  }

  &:hover:before {
    width: 100%;
  }
`
const imgStyles = {
  position: 'absolute',
  zIndex: -5,
  top: 0,
  opacity: 1,
  width: '100%',
  height: '100%',
  flexDirection: 'column',
  minHeight: 400,
  display: 'flex',
  justifyContent: 'space-around',
  backgroundSize: 'cover',
  fontSize: 96,
  letterSpacing: 5,
}

const Nav = styled.div`
  display: flex;
  zindex: 10;
  height: 100%;
  justify-content: between;
`

const Navigation = () => {
  const { languages, changeLanguage, originalPath, t } = useI18next()
  const { inverted } = useContext(LayoutContext)
  const { showHeaderPage } = useContext(LayoutContext)

  const options = {
    [t('main_page')]: '/',
    [t('contact.title')]: '/contact',
    [t('gallery.title')]: '/gallery',
    [t('hostel.title')]: '/hostel',
  }

  return (
    <Nav
      className={clsx('mx-auto h-screen', [
        inverted ? 'text-white' : 'text-black',
      ])}
    >
      {showHeaderPage && (
        <>
          <StaticImage
            src="../../images/header.jpg"
            layout="fullWidth"
            className="h-screen"
            style={imgStyles}
            alt="Header Greek Food"
          />
          <Shade />
        </>
      )}
      {/* <TiThMenu className="z-10" /> */}
      {/* <div>
        {languages.map((lang) => {
          const country = locales
          const imgUrl = `http://purecatamphetamine.github.io/country-flag-icons/3x2/${country}.svg`
          return (
            <div key={lang} className="">
            <img alt={lang} src={imgUrl} />
            </div>
          )
        })}
        </div> */}
      <div className="flex flex-col z-10 w-screen shadow-sm">
        <div
          className="hidden w-full md:flex md:justify-end p-4"
          id="navbar-default"
        >
          <ul className="font-medium font-serif flex p-4 md:p-0 mt-4 border rounded-lg border-black md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            {Object.keys(options).map((option) => (
              <li
                key={option}
                className="transition-all relative hover:bg-black/5 rounded-md p-3"
              >
                <StyledListItem href={options[option]} aria-current="page">
                  {option.toUpperCase()}
                </StyledListItem>
              </li>
            ))}
          </ul>
        </div>
        {showHeaderPage && (
          <div className="flex justify-center h-screen flex-col">
            <p className="font-serif font-semibold sm:text-6xl text-xl text-center content-center">
              {t('main.title')}
              <p className="font-serif sm:text-3xl text-2xl font-normal text-center content-center">
                {t('main.sub_title')}
              </p>
            </p>
          </div>
        )}
      </div>
    </Nav>
  )
}

export default Navigation
