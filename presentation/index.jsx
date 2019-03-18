// Import React
import React from 'react'
import '../assets/prism-tomorrow-ally.css'

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Notes
} from 'spectacle'

import AboutMeSlide from './slideTemplates/about-me-slide.jsx'
import QuoteSlide from './slideTemplates/quote-slide.jsx'
import DefinitionSlide from './slideTemplates/definition-slide.jsx'
import ListSlide from './slideTemplates/list-slide.jsx'
import SimpleSlide from './slideTemplates/simple-slide.jsx'
import ConceptSlide from './slideTemplates/concept-slide.jsx'
import ImageSlide from './slideTemplates/image-slide.jsx'
import DoubleImageSlide from './slideTemplates/double-image-slide.jsx'
import QuotesSlide from './slideTemplates/quotes-slide.jsx'
import colors from './slideTemplates/colors'
import CodeSlide from 'spectacle-code-slide'

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader'
preloader({})
// Import theme
import createTheme from 'spectacle/lib/themes/default'

// Require CSS
require('normalize.css')
// use colors in slideTemplates/colors.js to construct theme
const theme = createTheme(colors, {
  primary: 'Montserrat',
  secondary: 'Helvetica'
})

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <AboutMeSlide>
          <Notes>
            <p>
              This is just the introductory slide I use, we can remake for our
              own purposes.
            </p>
            <p>
              Note for all slides you can use a notes tag in children to
              specific presenter notes, and those notes support HTML
            </p>
          </Notes>
        </AboutMeSlide>
        <DefinitionSlide
          fit={false}
          term="Apples"
          definition="A Large Round Red Fruit"
        >
          <Notes>
            Definition slides have a large heading and small, longer text below,
            usually used to define term.
            <br />
            fit=false specifies if the heading gets scaled and stretched to fit
            on a single line
          </Notes>
        </DefinitionSlide>

        <ImageSlide
          title="Pooh Beard"
          image="poohbear.jpg"
          text="Here is my dog"
        >
          <Notes>
            Image slide displays an image with a heading above and regular size
            text below <br />
            Images should live in assets/images to be picked up here
          </Notes>
        </ImageSlide>
        <SimpleSlide
          inverted
          fit={false}
          statement="What is a computer program?"
        >
          <Notes>
            <p>Simple slide is just a one line statement at heading size</p>
            <p>
              <b>Note the `inverted` attribute</b>
            </p>
            <p>
              Inverted on any slide uses the dark color palette version -- I
              usually use it once I'm in the main content of the talk
            </p>
          </Notes>
        </SimpleSlide>
        <QuoteSlide
          quote="Fourscore and seven years ago"
          cite="Abraham Lincoln"
        >
          <Notes>Quote slide is for quotations with an attribution</Notes>
        </QuoteSlide>
        <ConceptSlide
          concept="Question 1"
          description="What is the meaning of life?"
        >
          <Notes>
            Concept slides are just the opposite of definition slides -- the
            concept is normal text while the description is header text below
          </Notes>
        </ConceptSlide>
        <CodeSlide
          notes={
            <div>
              <p>
                Code slides are for displaying code snippets, with a cool
                animated, if somewhat finicky library
              </p>
            </div>
          }
          lang="c"
          code={require('raw-loader!../assets/interrupt.c')}
          ranges={[
            { loc: [0, 5], title: 'In The Beginning... C!' },
            { loc: [20, 28], note: 'Override the damn BIOS!' },
            { loc: [10, 19], note: 'Interrupt Service Request Code' },
            { loc: [35, 50], note: 'The main loop' },
            { loc: [44, 47], note: 'Read from the buffer and update state!' },
            { loc: [50, 58], note: 'Ctrl+C will not save you...' }
          ]}
        />
        <ListSlide
          ordered={false}
          title="Observer Pattern vs Global Event Bus"
          list={[
            '(+) Way simpler than global event bus',
            '(+) Localized scope',
            '(-) Have To Setup Subscriptions'
          ]}
        >
          <Notes>
            <p>
              List slides are just an easy way to display an ordered or
              unordered list, without all the business of ul/li tags
            </p>
          </Notes>
        </ListSlide>
      </Deck>
    )
  }
}
