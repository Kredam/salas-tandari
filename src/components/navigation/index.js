/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { Link, useI18next } from 'gatsby-plugin-react-i18next'
import styled from '@emotion/styled/macro'
import LayoutContext from '../../hooks/layout-context'
import { StaticImage } from 'gatsby-plugin-image'

import clsx from 'clsx'
import Shade from '../shade'

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

const Navigation = ({ data }) => {
  const { languages, originalPath, i18n, t } = useI18next()
  const { inverted } = useContext(LayoutContext)
  const { showHeaderPage } = useContext(LayoutContext)
  const [open, setOpen] = React.useState(true)

  const options = {
    [t('main_page')]: '/',
    [t('contact.title')]: '/contact',
    [t('gallery.title')]: '/gallery',
    [t('hostel.title')]: '/hostel',
  }

  const icons = {
    en: 'http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg',
    hu: 'http://purecatamphetamine.github.io/country-flag-icons/3x2/HU.svg',
  }

  const handleOpen = () => {
    setOpen(!open)
  }

  React.useEffect(() => {
    console.log(open)
  }, [open])

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
      <div className="flex flex-col justify-between z-10 w-screen shadow-sm">
        <div className="flex justify-between p-4 max-mobile:mt-4">
          <div className="block mobile:flex mobile:justify-evenly px-4 w-40">
            {languages.map((lng) => (
              <Link
                key={lng}
                to={originalPath}
                language={lng}
                className={clsx('content-center')}
              >
                <img
                  width={32}
                  alt={lng}
                  src={icons[lng]}
                  className={clsx(
                    {
                      'brightness-50': i18n.resolvedLanguage !== lng,
                    },
                    'mb-4 transition-all cursor-pointer hover:opacity-75'
                  )}
                />
              </Link>
            ))}
          </div>
          <div
            className={clsx(
              [open ? 'relative' : 'hidden'],
              'w-full mobile:w-auto mobile:flex mobile:justify-end'
            )}
          >
            {/* <ul className="absolute origin-top-right bg-white border rounded-md font-medium font-serif flex flex-col md:bg-transparent md:p-0 mt-4 md:flex-row md:space-x-8"> */}
            <ul className="absolute max-mobile:w-full font-medium flex flex-col p-4 mobile:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 mobile:flex-row mobile:space-x-8 rtl:space-x-reverse mobile:mt-0 mobile:border-0 mobile:bg-transparent max-mobile:shadow-custom">
              {Object.keys(options).map((option) => (
                <li
                  key={option}
                  className="transition-all relative hover:bg-black/5 rounded-md p-3"
                >
                  <StyledListItem
                    href={options[option]}
                    className="max-mobile:text-black"
                  >
                    {option.toUpperCase()}
                  </StyledListItem>
                </li>
              ))}
            </ul>
          </div>
          <div className="mobile:hidden">
            <button
              type="button"
              onClick={handleOpen}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-ba rounded-lg mobile:hidden"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
        </div>
        {showHeaderPage && (
          <div className="flex justify-center h-screen flex-col">
            <h1 className="font-serif font-semibold sm:text-6xl text-center content-center">
              {t('main.title')}
            </h1>
            <h2 className="font-serif sm:text-3xl font-normal text-center content-center">
              {t('main.sub_title')}
            </h2>
          </div>
        )}
      </div>
    </Nav>
  )
}

export default Navigation
