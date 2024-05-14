import React from 'react'
import { useI18next } from 'gatsby-plugin-react-i18next'
import utils from '../../utils/index.mjs'

// eslint-disable-next-line react/prop-types
const Navigation = () => {
  const { languages, changeLanguage, originalPath } = useI18next()
  const { t } = useTranslation()
  const { locales } = utils
  const options = {
    [t('main_page')]: '/',
    [t('contact.title')]: '/contact',
    [t('gallery.title')]: '/gallery',
    [t('hostel.title')]: '/hostel',
  }

  return (
    <div className="flex w-screen justify-between bg-transparent mx-auto p-4">
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
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
      <div>
        {languages.map((lang) => {
          const country = locales
          const imgUrl = `http://purecatamphetamine.github.io/country-flag-icons/3x2/${country}.svg`
          return (
            <div key={lang} className="">
              <img alt={lang} src={imgUrl} />
            </div>
          )
        })}
      </div>
      <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul className="font-medium font-sans flex p-4 md:p-0 mt-4 border rounded-lg bg-black md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
          {Object.keys(options).map((option) => (
            <li key={option}>
              <a
                href={options[option]}
                className="block py-2 px-3 text-white bg-black rounded md:bg-transparent md:p-0"
                aria-current="page"
              >
                {option}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Navigation
