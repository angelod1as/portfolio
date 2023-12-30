import React, { FC } from 'react'
import { SectionProps } from '.'
import { Accordion } from '#components/common/Accordion'

export const Generalist: FC<SectionProps> = ({ color, Strong }) => {
  if (!Strong) {
    return null
  }

  return (
    <>
      <h2 className="h2-as-h1">
        I'm a proud <span className={color}>generalist</span>
      </h2>

      <div>
        <p>
          My main focus is <Strong>communication</Strong> applied to{' '}
          <Strong>technology</Strong>.
        </p>
        <p>
          I can integrate <Strong>multidisciplinary teams</Strong> and work out
          the <Strong>individuality</Strong> of each member in order to deliver{' '}
          <Strong>greater value</Strong> to the customer and to the
          professionals.
        </p>
        <p>
          I actually like <Strong>being in meetings</Strong> and{' '}
          <Strong>organizing things</Strong>. I'm a certified{' '}
          <Strong>Scrum Master</Strong> but adapt well to different{' '}
          <Strong>Agile</Strong> environments
        </p>
        <p>
          Also, I code using <Strong>Typescript</Strong> and{' '}
          <Strong>React</Strong>.{' '}
        </p>

        <div className="flex flex-col gap-2 pt-2">
          <Accordion color={color} title="I have worked before with:">
            <p>A good chunk of the modern web development ecosystem.</p>
            <ul className="list-disc">
              <li>
                <Strong>Javascript</Strong> - Typescript, React, NextJS, Redux,
                Node.js
              </li>
              <li>
                <Strong>CSS</Strong> - Tailwind, SASS, Stylus, Styled
                Components, Storybook
              </li>
              <li>
                <Strong>HTML</Strong> - JSX, Pug
              </li>
              <li>
                <Strong>Tests</Strong> - Jest, Cypress, Playwright, Testing
                Library
              </li>
            </ul>
            <p>
              Also, Five years working in Latin America's biggest newspaper gave
              me unmatched speed and creativity.
            </p>
            <ul className="list-disc">
              <li>
                <Strong>UI</Strong> - Figma, Sketch, AdobeXD
              </li>
              <li>
                <Strong>Print & Infographics</Strong> - InDesign, Illustrator,
                Photoshop
              </li>
              <li>
                <Strong>Video & Motion</Strong> - Premiere Pro, After Effects
              </li>
              <li>
                <Strong>Audio</Strong> - Audacity, Audition
              </li>
            </ul>
          </Accordion>
        </div>

        {/* TODO: Coding skills link */}
        {/* <Link className={color} href="/">
          More about my coding skills here.
        </Link> */}
      </div>
    </>
  )
}
