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
        <SimpleSlide inverted fit={false} statement="Doom Source Code Image">
          <Notes>
            <p>
              A couple years later, the Doom source code was released while I
              was in college. I read it. It was… boring. It seemed to have no
              great architectural patterns. It was written in C, not the super
              cool new C++. The ways it was broken up were kinda basic. It
              wasn’t even very well commented — which I’d learned was the sign
              of good code. The only thing I noticed is I could keep reading it
              and could follow along. It was consistent and all kinda made
              sense.
            </p>
            <p>
              I threw my hands up at the boringness of Doom’s source code, and
              it took me almost 15 year to see I’d missed something.
            </p>
          </Notes>
        </SimpleSlide>
        <SimpleSlide statement="Part 2">
          <Notes>
            This brings me to slightly more honest answer about how I got into
            the tech industry. I’d like to tell it to you now:
          </Notes>
        </SimpleSlide>
        <SimpleSlide inverted fit={false} statement="Transition Image">
          <Notes>
            <p>
              After I graduated college, at the age of 23 I decided to
              transition genders. Back then transition was very hard. I lost my
              job — I was not an established programmer — and my income. I found
              a career in non-profit.
            </p>
          </Notes>
        </SimpleSlide>
        <FullImageSlide inverted image="women-in-tech.png">
          <Notes>
            <p>
              For a long time I didn’t really think about tech. It sounds
              incredibly sexist to say so now, but I genuinely thought part of
              my transition was I couldn’t be in such a “masculine”
              profession.It was only years later reading about other women in
              tech that I got courage to dive back in.
            </p>
          </Notes>
        </FullImageSlide>
        <SimpleSlide inverted statement="Know You Audience">
          <Notes>
            <p>
              Now this isn’t a secret story. Most people who’ve known me for any
              amount of time in tech know I’m trans. But I don’t tell that to
              people in a job interview. And it’s not cause there’s something
              untrue about either story. I just know my audience.
            </p>
            <p>
              Who is the audience of a computer program? Obviously, we’re
              talking to a computer. I was taught very earlier on that a
              computer program is a sequence of instructions to tell the
              computer program to do something.
            </p>
          </Notes>
        </SimpleSlide>
        <SimpleSlide
          inverted
          fit={false}
          statement="Computers Talk To Each Other Image">
          <Notes>
            <p>
              But the computer could take those instructions directly in the
              language of 1’s and 0’s. It doesn’t care about object oriented
              programming, or functional programming, or declarative UI
              components with unidirectional data flow. I’d posit if computers
              ever become able to program themselves, they will almost surely
              output programs that none of us can even remotely understand.
            </p>
          </Notes>
        </SimpleSlide>
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
        <SimpleSlide
          inverted
          fit={false}
          statement="Frustration with imperative code image">
          <Notes>
            <p>
              Why would I adopt the current trends of functional programming,
              immutable data structures, algebraic types, maybe even some
              bizarre lambda calculus concepts? Most likely cause I tried
              writing imperative programs and found my human brain sucked at
              doing it without error.
            </p>
          </Notes>
        </SimpleSlide>
        <SimpleSlide
          inverted
          fit={false}
          statement="Other person frustrated with imperative code image">
          <Notes>
            <p>
              Or, possibly, I spent lots of time writing some complicated
              imperative programming that was super awesome and didn’t fail, and
              someone looked at my code and said “I can’t understand this shit!”
            </p>
            <p>
              And yet, if we accept the audience of programming is humans, then
              all we’re doing is trying to communicate with each other, through
              the medium of code. We just telling stories.
            </p>
          </Notes>
        </SimpleSlide>
        <SimpleSlide inverted fit={false} statement="Writers Workshop Image">
          <Notes>
            <p>
              So, it’s sorta funny that we think patterns will save us. Can you
              imagine if you went to a writing workshop trying to be better
              writer and someone said “just use more similes, less metaphors!” I
              tried patterns even when I was young. They didn’t help a lot.
            </p>
          </Notes>
        </SimpleSlide>
        <SimpleSlide inverted fit={false} statement="Action Frameworks Image">
          <Notes>
            <p>
              Our frameworks can sometimes reduce the scope of the narratives we
              construct for a certain class of problems by providing a preset
              structure. And that can make things easier for beginning
              programmers. But much like people will say an action movie or
              romantic comedy is “formulaic”, a framework that can provide a
              repeatable way to reduce complexity can restrict your ability to
              do something novel.
            </p>
          </Notes>
        </SimpleSlide>
        <SimpleSlide inverted statement="What can we do?">
          <Notes>
            <p>
              So if we accept that patterns are just a patterns, and a big
              framework is useful but limiting, how do people actually get good
              at programming?
            </p>
          </Notes>
        </SimpleSlide>
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

        <FullImageSlide inverted image="multiple-truths1.png">
          <Notes>
            <p>
              I don’t tell that story in full to a lot of people. But it’s true.
              And yet, the other stories I’ve also told are true. They just
              leave things out.
            </p>
            <p>
              Each story captures the right truth for the person receiving it.
            </p>
          </Notes>
        </FullImageSlide>
        <FullImageSlide inverted image="interview.png">
          <Notes>
            <p>
              For the interview I offer an easily digestible soundbite with a
              nice but brief nod to being a well rounded person.
            </p>
          </Notes>
        </FullImageSlide>

        <FullImageSlide inverted image="women-in-tech.png">
          <Notes>
            <p>
              To people who’ve known me professionally for a bit, I have a story
              which humanizes me, offers a bit of an understanding into who I
              am, and a nice gender affirming narrative of triumph over
              adversity and the power of female role models.
            </p>
          </Notes>
        </FullImageSlide>

        <FullImageSlide inverted image="brain-damage.png">
          <Notes>
            <p>
              The story I tell myself is one of triumph over adversity, it’s
              just a lot more messy, and covers some areas that aren’t as fun to
              talk about cause people may make judgements. But it has even more
              value to me than the others because the adversity is much greater.
            </p>
          </Notes>
        </FullImageSlide>

        <FullImageSlide inverted image="data-compression.png">
          <Notes>
            <p>
              The trick here is finding the right meaning for the situation. All
              these stories cover 15 years of life experience and have to be
              compressed into three sentences. How do we construct a narrative
              from too much input data, too many details, that makes sense for
              the situation. We have to leave stuff out of the narrative. How do
              we decide what to leave out?
            </p>
          </Notes>
        </FullImageSlide>

        <SimpleSlide inverted fit={false} statement="Organizing 1 image">
          <Notes>
            <p>
              I inadvertently took a graduate level course in how to do this
              well when as one of the founders of a small non-profit for
              transgender people of color in Los Angeles, I became our unpaid
              grant writer.
            </p>
          </Notes>
        </SimpleSlide>
        <SimpleSlide inverted fit={false} statement="Organizing 2 image">
          <Notes>
            <p>
              Like most underfunded non-profit groups made up entirely of
              oppressed people, our work was extremely messy. We tried to do all
              kinds of things, worked with hundreds of folks, helped some,
              didn’t help others.
            </p>
          </Notes>
        </SimpleSlide>
        <SimpleSlide inverted fit={false} statement="Organizing 3 image">
          <Notes>
            <p>
              We tried to solve problems for people with multiple oppressions
              hundreds of years in the making through local issue organizing
              campaigns— a Quixotic endeavor if ever there was one. We fought
              through bitter internal strifes and conflicts.
            </p>
          </Notes>
        </SimpleSlide>
        <SimpleSlide inverted fit={false} statement="Organizing 4 image">
          <Notes>
            <p>
              And, then, in order to get funding, we had take all this work, and
              compress it into an 8 page narrative that told our story to a
              funder who’s worked focused only gay and lesbian communities, and
              honestly mostly white gay and lesbian communities. They’d probably
              never funded transgender people, certainly not a group made up of
              mostly transgender people of color.
            </p>
          </Notes>
        </SimpleSlide>
        <FullImageSlide inverted image="multiple-truths1.png">
          <Notes>
            <p>
              What I learned to do in grant writing, it to seek the heart of the
              truth for the moment.
            </p>
          </Notes>
        </FullImageSlide>
        <FullImageSlide inverted image="multiple-truths2.png">
          <Notes>
            <p>
              I tried to find the key accomplishments that could be reduced to a
              sentence or two.
            </p>
          </Notes>
        </FullImageSlide>
        <FullImageSlide inverted image="multiple-truths3.png">
          <Notes>
            <p>
              I learned to identify consistent themes, and leaving out details
              or aspects of what we’re doing that made things seem inconsistent.
            </p>
          </Notes>
        </FullImageSlide>
        <FullImageSlide inverted image="multiple-truths4.png">
          <Notes>
            <p>
              I learned to break apart aspects of the narrative in each section,
              so each section made sense and told a mini-story that built up to
              a larger story
            </p>
          </Notes>
        </FullImageSlide>
        <SimpleSlide inverted fit={false} statement="Heart Of Truth 5 Image">
          <Notes>
            <p>
              In effect, I constructed a system for understanding the work we
              were doing that made enough sense to feel like it captured the
              whole, even if it couldn’t possibly do so. It had an internal
              consistency and captured what was important.
            </p>
          </Notes>
        </SimpleSlide>
        <SimpleSlide inverted statement="Software Narratives Change">
          <Notes>
            <p>
              This sounds a bit different from a software system, but maybe it’s
              not. If you are writing for a startup, how likely are you to build
              a system that looks like it’s final version? How likely are you to
              cover all their users needs? How many startup companies even know
              who their users are? Are they the same people who will use the
              product if it ever becomes wildly successful?
            </p>
          </Notes>
        </SimpleSlide>
        <SimpleSlide inverted fit={false} statement="Problem Space Image">
          <Notes>
            <p>
              Every software system that is useful is useful cause it solves a
              real world problem for humans. And every one of those solutions is
              partial. The problem space is always greater than what the
              software covers.
            </p>
          </Notes>
        </SimpleSlide>

        <SimpleSlide inverted fit={false} statement="Writers Workshop Image 2">
          <Notes>
            <p>
              The way I learned to write grants was through practice, feedback,
              and revision. That’s what they do in writers workshops — they read
              each others stories, and give feedback.
            </p>
          </Notes>
        </SimpleSlide>
        <ListSlide
          title="3 Steps To Becoming A Good Programmer"
          appear={false}
          inverted
          list={['', '', '']}>
          <Notes>
            <p>
              There is no slide in this talk that tells you the three steps to
              good programming cause there are no steps.
            </p>
          </Notes>
        </ListSlide>
        <SimpleSlide inverted fit={false} statement="Practicing Image">
          <Notes>
            <p>
              There’s only individual feedback and revision. We almost never get
              our code right on the first try. Even if it runs, it probably
              doesn’t make a lot of sense to someone reading it.
            </p>
          </Notes>
        </SimpleSlide>
        <SimpleSlide inverted fit={false} statement="Feedback Image">
          <Notes>
            <p>
              Most of the practices in programming I’ve leaned on in the long
              term, namely testing and pair programming, are about building
              feedback cycles and systems into coding so you can revise and
              refactor to make it better. Even practices like “taking a break
              and going for a walk” acknowledge there’s an inspirational,
              creative part to writing code which has no immediate formula.
            </p>
          </Notes>
        </SimpleSlide>
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
