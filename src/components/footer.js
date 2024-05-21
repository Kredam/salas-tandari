import { useI18next } from 'gatsby-plugin-react-i18next'
import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const footerStyle = {
  position: 'fixed',
  overflow: 'hidden',
  height: 100,
  width: '100%',
  left: 0,
  bottom: 0,
}

const flexContainer = {
  height: '100%',
  padding: 8,
}

const Footer = () => {
  const { language, t } = useI18next()

  const showInMap = () => {
    window.open(
      `https://www.google.com/maps/search/?api=1&query=Tandar+tanya+lakodalmasterem`
    )
  }

  return (
    <div
      style={footerStyle}
      className="border-t-2 border-black bg-white font-serif"
    >
      <div style={flexContainer} className="flex shadow-2xl justify-evenly">
        <div className="w-[200px]">
          <div>
            <body2>LOCATION</body2>
          </div>
          <div onClick={() => showInMap()} className="cursor-pointer">
            <subtitle>Slatina, Martonoš, Serbia</subtitle>
          </div>
        </div>
        <div className="w-[300px] max-mobile:hidden">
          <div>
            <body2>{t('contact.title').toUpperCase()}</body2>
          </div>
          <div>
            <subtitle2>(TEL) TANDARI TÜNDE +22522222</subtitle2>
          </div>
          <div>
            <subtitle2>(TEL) PÁLINKÁS JÓZSEF +5614616161</subtitle2>
          </div>
        </div>
        <div className="w-[200px] flex justify-evenly items-center">
          <div className="size-14">
            <a href="https://www.facebook.com/TandariLake">
              <FaFacebookF size={56} />
            </a>
          </div>
          <div className="size-14">
            <a href="https://X.com/SalasTandari">
              <FaXTwitter size={56} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
