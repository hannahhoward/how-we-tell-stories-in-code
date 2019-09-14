// Import React
import React from 'react'

// Import Spectacle Core tags
import { Heading, Image, Text, Appear } from './components'
import styled from 'styled-components'
import { headingColor, textColor } from './utilities.jsx'

import asSlide from './as-slide.jsx'
import FullScreen from './full-screen.jsx'

const imageStyle = {
  zoom: 8, // increase if you have very small images
  display: 'block',
  margin: 'auto',
  height: 'auto',
  width: 'auto',
  maxWidth: '100%',
  maxHeight: '90%',
  marginTop: '5%'
}

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  flex-basis: 50%;
  justify-content: space-evenly;
`

const AboutMeSlide = ({ children, inverted }) => {
  const tgwLogo = require('../../assets/images/techgirlwonder-01.png').replace(
    '/',
    ''
  )
  const c5Logo = require('../../assets/images/c5_final_logo_only_hires.png').replace(
    '/',
    ''
  )
  return (
    <FullScreen column>
      <Row style={{ flexShrink: 0 }}>
        <Heading
          size={1}
          fit
          caps
          lineHeight={1}
          textColor={headingColor(inverted)}>
          Hannah Howard #AboutMe
        </Heading>
      </Row>
      <Row style={{ maxHeight: '90%' }}>
        <Column>
          <Image src={tgwLogo} style={imageStyle} />
          <Text textColor={textColor(inverted)}>
            @techgirlwonder
            <br />
            she/her
          </Text>
        </Column>
        <Column>
          <Image src={c5Logo} style={imageStyle} />
          <Text
            textColor={textColor(inverted)}
            style={{ wordBreak: 'break-word' }}>
            hannah@carbonfive.com
          </Text>
        </Column>
      </Row>
      {children}
    </FullScreen>
  )
}

export default asSlide(AboutMeSlide)
