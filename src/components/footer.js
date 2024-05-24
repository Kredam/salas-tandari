import React from 'react'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import styled from '@emotion/styled/macro'
import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook'
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter'

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100vw;
  padding: 24px;
`

const FlexItem = styled.div`
  align-content: center;
  width: ${(props) => props.$width}px;
`

const Footer = () => {
  const { t } = useTranslation()

  const showInMap = () => {
    window.open(
      `https://www.google.com/maps/search/?api=1&query=Tandar+tanya+lakodalmasterem`
    )
  }

  return (
    <div className="fixed h-[100px] left-0 bottom-0 border-t-2 border-black bg-white font-serif">
      <FlexContainer className="shadow-2xl">
        <FlexItem $width={150}>
          <div>
            <p className="body2">LOCATION</p>
          </div>
          <div onClick={() => showInMap()} className="cursor-pointer">
            <p className="subtitle">Slatina, Martonoš, Serbia</p>
          </div>
        </FlexItem>
        <FlexItem $width={300} className="max-mobile:hidden">
          <div>
            <p className="body2">{t('contact.title').toUpperCase()}</p>
          </div>
          <div>
            <p className="subtitle2">(TEL) TANDARI TÜNDE +22522222</p>
          </div>
          <div>
            <p className="subtitle2">
              (TEL) PÁLINKÁS JÓZSEF +381(0)63-7488-149
            </p>
          </div>
        </FlexItem>
        <FlexItem $width={150} className="flex justify-evenly items-center">
          <div className="size-12 content-center">
            <a
              href="https://www.facebook.com/TandariLake"
              aria-label="Facebook"
            >
              <FaFacebook size={43} />
            </a>
          </div>
          <div className="size-12 content-center">
            <a href="https://X.com/SalasTandari" aria-label="X">
              <FaTwitter size={43} />
            </a>
          </div>
        </FlexItem>
      </FlexContainer>
    </div>
  )
}

export default Footer
