// Import React
import React from 'react'
import PropTypes from 'prop-types'

// Import Spectacle Core tags
import { Heading, List, ListItem, Appear } from './components'

import asSlide from './as-slide.jsx'
import { headingColor, textColor } from './utilities.jsx'
import FullScreen from './full-screen.jsx'

const ListSlide = ({
  inverted,
  title,
  list,
  size,
  fit,
  caps,
  ordered,
  appear,
  children
}) => {
  return (
    <FullScreen column>
      <Heading
        fit={fit}
        size={size}
        caps={caps}
        textColor={headingColor(inverted)}>
        {title}
      </Heading>
      <List ordered={ordered} textColor={textColor(inverted)}>
        {appear
          ? list.map((listItem, idx) => {
              return (
                <Appear key={idx}>
                  <ListItem>{listItem}</ListItem>
                </Appear>
              )
            })
          : list.map((listItem, idx) => {
              return <ListItem key={idx}>{listItem}</ListItem>
            })}
      </List>
      {children}
    </FullScreen>
  )
}

ListSlide.propTypes = {
  caps: PropTypes.bool.isRequired,
  fit: PropTypes.bool.isRequired,
  inverted: PropTypes.bool,
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  ordered: PropTypes.bool,
  size: PropTypes.number.isRequired,
  title: PropTypes.node.isRequired,
  appear: PropTypes.bool.isRequired
}

ListSlide.defaultProps = {
  inverted: false,
  size: 4,
  fit: false,
  caps: true,
  ordered: true,
  appear: true
}

export default asSlide(ListSlide)
