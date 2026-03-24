import { FCC } from '#types/types'
import { FC, ReactNode, useState } from 'react'
import { ResendSectionProps } from '../Resend'

type Recommendation = {
  name: string
  company: string
  role: string
  extra?: string
  id: string
  text: (Strong: FCC) => ReactNode
  excerpt: string
  highlighted?: boolean
}

const recommendations: Recommendation[] = [
  {
    company: 'Seasoned',
    id: 'felipefreitag',
    name: 'Felipe Freitag Vargas',
    role: 'Founder & CTO',
    extra: 'Now working at Resend',
    highlighted: true,
    excerpt:
      'Angelo showed us great technical skills, leadership qualities, and deep commitment.',
    text: Strong => (
      <p className="m-0">
        <Strong>
          Angelo showed us great technical skills, leadership qualities, and
          deep commitment.
        </Strong>{' '}
        He coded, managed a project, and trained people, among other activities.
        He was always eager to learn how the company worked and to bring ideas
        to improve our technology and processes. Besides delivering, he's a very
        easygoing person who gave and received feedback frequently both to his
        team and to the company as a whole.
      </p>
    ),
  },
  {
    id: 'viktorwasilev',
    name: 'Viktor Wasilev',
    role: 'Design Lead',
    company: 'HUK Autoservice',
    excerpt:
      'Angelo excels in translating designs into functional, visually appealing interfaces.',
    text: Strong => (
      <p className="m-0">
        Angelo is an exceptional Senior Frontend Developer who combines
        technical expertise with creative design skills. He significantly
        improved the user experience for thousands of German customers.{' '}
        <Strong>
          Angelo excels in translating designs into functional, visually
          appealing interfaces
        </Strong>{' '}
        and manages complex projects efficiently. His unique blend of technical
        excellence, design sensibility, and strong interpersonal skills make him
        a valuable asset to any development team.
      </p>
    ),
  },
  {
    company: 'foobar Agency',
    id: 'matthiasdietrich',
    name: 'Matthias Dietrich',
    role: 'CEO',
    excerpt:
      'He has an exceptional understanding of the impact software can have on a business.',
    text: Strong => (
      <p className="m-0">
        Angelo is a truly talented software developer.{' '}
        <Strong>
          He has an exceptional understanding of the impact software can have on
          a business,
        </Strong>{' '}
        and he excels at bridging the gap between technical and business
        perspectives. Angelo is always open to new ideas, an attentive listener,
        and a dedicated learner. His approach ensures that technical solutions
        are aligned with business goals, driving positive outcomes.
      </p>
    ),
  },
  {
    company: 'The Washington Post',
    id: 'simonducroquet',
    name: 'Simon Ducroquet',
    role: 'Visual Enterprise Editor',
    excerpt:
      'Angelo is an excellent developer and designer. He knows how to involve people in his projects.',
    text: Strong => (
      <p className="m-0">
        <Strong>Angelo is an excellent developer and designer.</Strong> He's
        very active, communicative, and{' '}
        <Strong>knows how to involve people in his projects.</Strong> He also
        has a great sense of organization and team management. He takes feedback
        well and is critical when necessary.
      </p>
    ),
  },
  {
    company: 'foobar Agency',
    name: 'Niek Nijrolder',
    id: 'nieknijrolder',
    role: 'Business Development Manager',
    excerpt:
      'Angelo is able to communicate highly complex technical issues in a way that people without an engineering background can understand.',
    text: Strong => (
      <div>
        <p className="m-0">
          I have worked with Angelo on both internal and external projects and
          he is amazing to work with.{' '}
          <Strong>
            Angelo is able to communicate highly complex technical issues in a
            way that people without an engineering background can understand.
          </Strong>
        </p>
        <p className="m-0 mt-2">
          He brings a positive, solution-oriented attitude to teams and helps
          them exceed client expectations in terms of deadlines and quality of
          work. In my opinion, this makes him the perfect developer to
          seamlessly integrate into client-side teams.
        </p>
      </div>
    ),
  },
  {
    company: 'HUK Autoservice',
    name: 'Thais Dias',
    id: 'dias-thais',
    role: 'UI Designer',
    excerpt:
      'Angelo always brings brilliant insights that make our discussions way more interesting.',
    text: Strong => (
      <div>
        <p className="m-0">
          <Strong>
            Angelo always brings brilliant insights that make our discussions
            way more interesting.
          </Strong>{' '}
          He can take the most complicated topics and explain it in a way that
          makes it so easy to understand. He is also always there when you need
          him, available and eager to help out. A real team player!
        </p>
        <p className="m-0 mt-2">
          Working together has shown me how design and development can be a
          dream team. Angelo is great at bridging the gap between our worlds.
        </p>
      </div>
    ),
  },
  {
    company: 'Seasoned',
    id: 'andrepinho',
    name: 'André Pinho',
    role: 'Senior Web Engineer',
    excerpt:
      "Working with Angelo was one of the best teamwork experiences I've had.",
    text: Strong => (
      <p className="m-0">
        <Strong>
          Working with Angelo was one of the best teamwork experiences I've had.
        </Strong>{' '}
        He's a great developer with very sharp front-end skills. His designer
        skills also often come into play as he makes sure the product has the
        best experience for the end users. As a natural communicator, he is a
        great teammate and can get everyone on the same page even in complex
        topics. He's also a very good teacher — he's helped elevate my skills to
        a new level.
      </p>
    ),
  },
]

function RecommendationCard({
  rec: { company, excerpt, id, name, role, text, extra, highlighted },
  ColorLink,
  Strong,
}: {
  rec: Recommendation
  ColorLink: NonNullable<ResendSectionProps['ColorLink']>
  Strong: FCC
}) {
  const [locked, setLocked] = useState(false)
  const [hovered, setHovered] = useState(false)

  const expanded = locked || hovered

  const toggle = () => setLocked(prev => !prev)

  return (
    <div
      role="button"
      tabIndex={0}
      aria-expanded={expanded}
      onClick={toggle}
      onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && toggle()}
      onPointerEnter={e => e.pointerType === 'mouse' && setHovered(true)}
      onPointerLeave={e => e.pointerType === 'mouse' && setHovered(false)}
      className={`border p-4 rounded bg-transparent w-full cursor-pointer ${
        highlighted ? 'border-highlight' : 'border-gray-700'
      }`}
    >
      <p
        className="m-0 text-sm text-gray-400 transition-opacity duration-300"
        style={{ opacity: expanded ? 0 : 1 }}
        aria-hidden={expanded}
      >
        {excerpt}
      </p>
      <div
        className="text-sm text-gray-400 transition-all duration-300 ease-in-out"
        style={{
          opacity: expanded ? 1 : 0,
          maxHeight: expanded ? '600px' : '0px',
          overflow: 'hidden',
        }}
        aria-hidden={!expanded}
      >
        {text(Strong)}
      </div>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions, jsx-a11y/no-noninteractive-element-interactions */}
      <p className="m-0 mt-3 text-sm" onClick={e => e.stopPropagation()}>
        <ColorLink href={`https://www.linkedin.com/in/${id}/`}>
          {name}
        </ColorLink>
        {role && company && (
          <span className="text-gray-400">
            {' '}
            — {role} @ {company}
          </span>
        )}
      </p>
      {extra && <p className="text-sm font-bold wave">{extra}</p>}
    </div>
  )
}

export const Recommendations: FC<ResendSectionProps> = ({
  ColorLink,
  Strong,
}) => {
  return (
    <div className="flex flex-col gap-8">
      <h2>
        Don't take <span className="text-highlight">my word</span> for it:
      </h2>
      <p>
        Edited for length. Read them in whole (and many others){' '}
        <ColorLink href="https://www.linkedin.com/in/angelod1as/details/recommendations/">
          on LinkedIn
        </ColorLink>
        . Titles reflect the roles they held when writing.
      </p>
      <div className="flex flex-col gap-4">
        {recommendations.map(rec => (
          <RecommendationCard
            key={rec.id}
            rec={rec}
            ColorLink={ColorLink}
            Strong={Strong}
          />
        ))}
      </div>
    </div>
  )
}
