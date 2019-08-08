/* eslint-disable import/no-webpack-loader-syntax */
// Import React
import React from 'react'
import '../assets/prism-tomorrow-ally.css'

// Import Spectacle Core tags
import { Deck, Notes } from 'spectacle'

import QuoteSlide from './slideTemplates/quote-slide.jsx'
import DefinitionSlide from './slideTemplates/definition-slide.jsx'
import ListSlide from './slideTemplates/list-slide.jsx'
import SimpleSlide from './slideTemplates/simple-slide.jsx'
import ConceptSlide from './slideTemplates/concept-slide.jsx'
import ImageSlide from './slideTemplates/image-slide.jsx'
import DoubleImageSlide from './slideTemplates/double-image-slide.jsx'
import QuotesSlide from './slideTemplates/quotes-slide.jsx'
import FullImageSlide from './slideTemplates/full-image-slide.jsx'
import colors from './slideTemplates/colors'
import CodeSlide from 'spectacle-code-slide'

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader'

// Import theme
import createTheme from 'spectacle/lib/themes/default'
preloader({})

// Require CSS
require('normalize.css')
// use colors in slideTemplates/colors.js to construct theme
const theme = createTheme(colors, {
  primary: 'Merienda',
  secondary: 'Helvetica'
})

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['fade']} transitionDuration={500} theme={theme}>
        <ListSlide
          title={
            <span>
              Content Warning:
              <br />
              <br />
              Discussions of
            </span>
          }
          appear={false}
          list={['Gender issues', 'Mental illness', 'Psychosis']}
        />
        <FullImageSlide inverted image="campfire.png">
          <Notes>
            Once upon a time, all you needed to tell a story was a language.
          </Notes>
        </FullImageSlide>
        <FullImageSlide inverted image="artwork.png">
          <Notes>
            About 40,000 years ago, we began telling stories through drawings
          </Notes>
        </FullImageSlide>
        <FullImageSlide inverted image="book.png">
          <Notes>
            Somewhere between 4,000 and 5,000 years ago, we wrote the first
            stories in words
          </Notes>
        </FullImageSlide>
        <FullImageSlide inverted image="film.png">
          <Notes>
            Just under 150 years ago, the first story was committed to film
          </Notes>
        </FullImageSlide>
        <FullImageSlide inverted image="eye.png">
          <Notes>
            Just over 50 years ago, Marshall McLuhan went so far as to suggest
            the media we use to tell our stories actually shape our societies
            more than the stories themselves.
          </Notes>
        </FullImageSlide>
        <FullImageSlide inverted image="title.png">
          <Notes>
            <p>
              Hi, my name&apos;s Hannah, and I want to talk to you about how
              programmers tell stories in code
            </p>
            <p>
              Because our medium quite complicated, we spend a surprising amount
              of time teaching people how to use it
            </p>
            <p>
              And to be fair, the medium of code has shaped our society
              drastically
            </p>
            <p>
              But I believe that a good story is as important the medium we tell
              it in,
            </p>
            <p>
              And if we spent only a fraction of the time we spend learning our
              media learning to tell good stories, we could all become much
              better programmers
            </p>
          </Notes>
        </FullImageSlide>
        <FullImageSlide inverted image="punch-wall.png">
          <Notes>
            <p>
              The goal of the this talk is to help you become a better
              programmer and it's aimed at people who’ve made it into this
              industry, perhaps by forcing their way in. You're here, and now
              you're asking "what now?"
            </p>
            <p>
              Recently I've had a few hunches, none of which I’m not totally
              sure about.
            </p>
            <p>
              The first hunch is that aside from my job title, I actually am a
              pretty good programmer.
            </p>
            <p>
              The second is that I might have something to say that might help
              other people become better programmers.
            </p>
            <p>
              And the third, that the best way to communicate what I have to say
              is to tell you my story in tech, or specifically, four different
              stories about how I got into the tech industry.
            </p>
            <p>
              If that sounds a bit odd to you, please bear with me, and at the
              end I’d ask everyone to give me your feedback on what is most and
              least valuable to you.
            </p>
          </Notes>
        </FullImageSlide>
        <SimpleSlide statement="Part 1" />
        <FullImageSlide inverted image="interview.png">
          <Notes>
            <p>
              You've probably been asked this question somewhere near the
              beginning of a technical interview.
            </p>
            <p> "How did you get into the tech industry?"</p>
            <p>
              This is how I answer this question when I’m in a job interview.
            </p>
          </Notes>
        </FullImageSlide>
        <FullImageSlide inverted image="computer-room.png">
          <Notes>
            <p>
              I’ve been programming since I was really young — I actually
              started in junior high. But after graduating college with a degree
              in computer science, I was very idealistic so I worked in
              non-profits before getting back into tech in my mid 30’s.
            </p>
          </Notes>
        </FullImageSlide>
        <FullImageSlide inverted image="demon.png">
          <Notes>
            <p>
              And what became clear to me quickly is that I was, in fact, no
              great programmer. I spent a year and a half trying to write a 3-d
              computer game engine to emulate the crowning achievement in game
              graphics at the time — Doom — and I failed miserably.{' '}
            </p>
          </Notes>
        </FullImageSlide>
        <FullImageSlide inverted image="jenga.png">
          <Notes>
            <p>
              I mean I wrote something— it just crashed every minute or so,
              meaning the computer needed a restart.
            </p>
          </Notes>
        </FullImageSlide>
        <FullImageSlide inverted image="code-forrest.png">
          <Notes>
            <p>
              At some point in developing it, I began to feel overwhelmed and
              lost every time I looked at the code. I couldn’t remember what
              half the files even did.
            </p>
            <p>
              The worst part is I thought I’d done everything right! I unrolled
              my inner loops into assembler to make it fast. I wrote everything
              with the cutting edge architectural software patterns of the time
              — something called object oriented programming and a super awesome
              new tool called class inheritance. None of it worked.
            </p>
          </Notes>
        </FullImageSlide>
        <SimpleSlide statement="Part 2"></SimpleSlide>
        <FullImageSlide inverted image="women-in-tech.png">
          <Notes>
            <p>
              It was only years later reading about other women in tech that I
              got courage to dive back in.
            </p>
            <p>
              Now this isn’t a secret story. Most people who’ve known me for any
              amount of time in tech know I’m trans. But I don’t tell that to
              people in a job interview. And it’s not cause there’s something
              untrue about either story. I just know my audience.
            </p>
          </Notes>
        </FullImageSlide>
        <ConceptSlide
          inverted
          concept="Reminder"
          description="We write software for each other">
          <Notes>
            <p>
              The audience of a computer program is the humans who have to build
              it, interact with it, and maintain it. This isn’t a new idea but I
              feel like we constantly lose sight of how central this is to what
              we do. Almost everything we do in programming — down to even the
              concept of variables — is to help ourselves understand, not the
              computer.
            </p>
          </Notes>
        </ConceptSlide>
        <SimpleSlide statement="Part 3"></SimpleSlide>
        <FullImageSlide inverted image="brain-damage.png">
          <Notes>
            <p>
              At this point, I’d like to tell you the real story of how I got
              into the tech industry. It goes like this.
            </p>
            <p>
              The realization that I wanted to transition came from taking LSD,
              shortly after college, and that experience was the beginning of a
              mental unravelling. In 2003 I experienced an extreme psychotic
              break.
            </p>
          </Notes>
        </FullImageSlide>
        <FullImageSlide inverted image="backpack.png">
          <Notes>
            <p>
              I was out of work for 3 years and on government disability for 5.
              For that time I carried the diagnosis of schizo-affective
              disorder. When I returned to work, it was working part time in a
              clothing store before returning to non-profit work and much much
              later to tech.
            </p>
          </Notes>
        </FullImageSlide>
        <SimpleSlide statement="Part 4"></SimpleSlide>
        <SimpleSlide inverted fit={false} statement="What Now?">
          <Notes>
            <p>
              So that’s it? “To be a good programmer, keep practicing” That
              feels like depressing answer. But I want to leave you with one
              more story and one more tool to make it a bit better.
            </p>
            <p>
              I’ve been thinking about my story of getting into programming, and
              reminding myself of parts I often leave out even to my self. Here
              are those parts:
            </p>
          </Notes>
        </SimpleSlide>
        <FullImageSlide image="summer.png">
          <Notes>
            <p>
              I was born to wealthy parents and I had access to computers early
              on.
            </p>
          </Notes>
        </FullImageSlide>
        <FullImageSlide image="fall.png">
          <Notes>
            <p>
              When my psychosis set in my mom took a year off to care for me and
              during the years I was struggling my parents supplemented my
              income. And even accepted my gender eventually. As I moved through
              the trans world and the mental health world I encountered folks
              struggling with the same things I was, but who didn’t have the
              resources I did.
            </p>
          </Notes>
        </FullImageSlide>
        <FullImageSlide image="winter.png">
          <Notes>
            <p>
              Their outcomes were not good. Two of my closest friends from my
              twenties died in their early thirties.
            </p>
          </Notes>
        </FullImageSlide>
        <FullImageSlide image="spring.png">
          <Notes>
            <p>
              My story is one of struggle and triumph, but also one of privilege
              and survivor’s guilt. If I get stuck in just the struggle and
              triumph, I leave out the whole truth, and affix myself to
              confronting every new situation in life as yet new adversity to
              overcome. Not every situation in life is a new hero’s journey.
            </p>
          </Notes>
        </FullImageSlide>
        <FullImageSlide image="backpack2.png">
          <Notes>
            <p>
              All of us tell stories about ourselves, both to ourselves and to
              others. If you’ve never had to think about your story, or to tell
              your story to someone in a way that left some parts out, my guess
              is you’re pretty privileged. My harebrained belief is that
              marginalized folks are all the best programmers cause our entire
              lives are spent constructing battle tested counter-narratives that
              can withstand a world that doesn’t want to hear our stories.
            </p>
            <p>
              But like my therapist says, cause I do have a therapist, our
              stories are just stories. Ultimately, they’re only true for the
              present moment.
            </p>
          </Notes>
        </FullImageSlide>
        <FullImageSlide image="backpack3.png">
          <Notes>
            <p>
              So it’s best to hold them lightly, to be willing to cast them off
              and rewrite them when appropriate. And if I had a parting piece of
              advice on how to become a good programmer — it’d be to take the
              process lightly. Take your code lightly. Be willing to constantly
              try new ideas, techniques, and when they don’t seem to be working
              for you — let them go. Learning is made much easier if you lower
              your sense of perfectionism.
            </p>
          </Notes>
        </FullImageSlide>
        <FullImageSlide image="paper1.png">
          <Notes>
            <p>
              The truth is, after 20 years of programming, when I go to work, I
              just try to do the best job I can for that day
            </p>
          </Notes>
        </FullImageSlide>
        <FullImageSlide image="paper2.png">
          <Notes>
            <p> to make todays narrative make sense.</p>
          </Notes>
        </FullImageSlide>
        <FullImageSlide image="paper3.png">
          <Notes>
            <p>
              I try to write as awesome a story in whatever context I’m in for 8
              hours.
            </p>
          </Notes>
        </FullImageSlide>
        <FullImageSlide image="paper4.png">
          <Notes>
            <p>And then I throw it out</p>
          </Notes>
        </FullImageSlide>
        <FullImageSlide image="paper5.png">
          <Notes>
            <p>Try to do better the next day. </p>
          </Notes>
        </FullImageSlide>
      </Deck>
    )
  }
}
