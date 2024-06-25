import { FC, ReactNode } from 'react'
import { SectionProps } from '.'

type Recommendation = {
  name: string
  company: string
  text: ReactNode
  id: string
  role: string
}

const recommendations: Recommendation[] = [
  {
    company: 'HUK-COBURG Autoservice GmbH',
    name: 'Steffen Mueller',
    role: 'CTO',
    id: 'steffen-mueller-139b8b191',
    text: (
      <>
        <p>
          With Angelo, I connect 100% ownership. Everything Angelo does is lead
          by this value. [...] In general, Angelo always finds the best
          solutions to our actual challenges using his immense skills as a
          senior developer.
        </p>
        <p>
          Angelo would be an asset to any team who needs an experienced
          front-end engineer with a huge sense of ownership to drive projects.
        </p>
      </>
    ),
  },
  {
    name: 'Moritz Tillmann',
    role: 'Director of Product',
    company: 'HUK-COBURG Autowelt GmbH',
    id: 'moritztillmann',
    text: (
      <p>
        Angelo is maybe the best freelancer I met so far. I would describe him
        as a guy with multiple weapons. He can not only code, he's always
        curious about the story behind it - and he understands the whole
        picture. A great team-player who leads meetings, gets people together,
        finds solutions in the group and is always willing to learn new stuff.
        To sum it up - you can not restrict him to a developer, he's more than
        that - especially with his background!
      </p>
    ),
  },
  {
    company: 'foobar Agency',
    name: 'Niek Nijrolder',
    id: 'nieknijrolder',
    role: 'Business Development Manager',
    text: (
      <>
        <p>
          I have worked with Angelo on both internal and external projects and
          he is amazing to work with. Angelo is able to communicate highly
          complex technical issues in a way that people without an engineering
          background can understand.
        </p>
        <p>
          He brings a positive, solution-oriented attitude to teams and helps
          them exceed client expectations in terms of deadlines and quality of
          work. In my opinion, this makes him the perfect developer to
          seamlessly integrate into client-side teams.
        </p>
      </>
    ),
  },
  {
    company: 'HUK-COBURG Autoservice GmbH',
    name: 'Thais Dias',
    id: 'dias-thais',
    role: 'UI Designer',
    text: (
      <>
        <p>
          [...] Angelo always brings brilliant insights that make our
          discussions way more interesting. He can take the most complicated
          topics and explain it in a way that makes it so easy to understand. He
          is also always there when you need him, available and eager to help
          out. A real team player!
        </p>
        <p>
          Working together has shown me how design and development can be a
          dream team. Angelo is great at bridging the gap between our worlds.
          Can't wait to keep making awesome things together!
        </p>
      </>
    ),
  },
  {
    company: 'Seasoned',
    id: 'felipefreitag',
    name: 'Felipe Freitag Vargas',
    role: 'Founder & CTO',
    text: (
      <>
        <p>
          Angelo showed us great technical skills, leadership qualities, and
          deep commitment. He coded, managed a project, and trained people,
          among other activities. He was always eager to learn how the company
          worked and to bring ideas to improve our technology and processes.
          Besides delivering, he's a very easygoing person who gave and received
          feedback frequently both to his team and to the company as a whole.
        </p>
      </>
    ),
  },
]

export const Recommendations: FC<SectionProps> = ({
  color,
  Strong,
  ColorLink,
}) => {
  if (!Strong || !ColorLink) {
    return null
  }

  return (
    <div className="flex flex-col gap-8">
      <h2>
        A few LinkedIn <span className={color}>recommendations</span>:
      </h2>

      <p className="">
        Edited for length. Read them in whole (and many others){' '}
        <ColorLink href="https://www.linkedin.com/in/angelod1as/details/recommendations/">
          here
        </ColorLink>
        .
      </p>
      <div className="flex flex-col gap-8">
        {recommendations.map(({ company, name, text, id, role }) => (
          <div key={id}>
            <h5>
              <ColorLink href={`https://www.linkedin.com/in/${id}/`}>
                {name}
              </ColorLink>
            </h5>
            <p className="text-sm text-gray-400">
              <span>{role}</span> @ <span>{company}</span>
            </p>
            {text}
          </div>
        ))}
      </div>
    </div>
  )
}
