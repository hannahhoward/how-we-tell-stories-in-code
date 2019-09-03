// Import React
import React from 'react'
import PropTypes from 'prop-types'

// Import Spectacle Core tags
import { Image } from './components'

import asSlide from './as-slide.jsx'
import FullScreen from './full-screen.jsx'

const imageStyle = {
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)'
}

const FullImageSlide = ({ image, children }) => {
  const imageSrc = require(`../../assets/images/${image}`).replace('/', '')
  const thisImageStyle = {
    ...imageStyle,
    zoom: 8, // increase if you have very small images
    display: 'block',
    margin: 'auto',
    height: '100%',
    width: 'auto',
    maxWidth: '100%',
    top: '0%',
    maxHeight: '100%'
  }
  return (
    <FullScreen style={{ padding: '0vh 0wh' }} column>
      <Image style={thisImageStyle} src={imageSrc} />
      {children}
    </FullScreen>
  )
}

FullImageSlide.propTypes = {
  image: PropTypes.string.isRequired,
  inverted: PropTypes.bool
}

FullImageSlide.defaultProps = {
  inverted: false
}

export default asSlide(FullImageSlide)
