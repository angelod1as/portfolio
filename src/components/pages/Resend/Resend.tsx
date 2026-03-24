import { CTA } from '#components/common/CTA'
import { HomeSection } from '#components/common/HomeSection'
import { Link, LinkProps } from '#components/common/Links'
import { NewHead } from '#components/common/NewHead'
import { Tag } from '#components/common/Tag'
import { FCC } from '#types/types'
import { Recommendations } from './sections/Recommendations'

export type ResendSectionProps = {
  Strong: FCC
  ColorLink: FCC<LinkProps>
}

const beats = [
  {
    date: '2013–2018',
    title: 'Designer & developer at Folha de S.Paulo',
    description:
      'Print and digital design, interactive journalism, infographics & layout design. Led the frontend for the award-winning "A World of Walls" project: Grande Premio Petrobras de Jornalismo, King of Spain Prize (Digital Journalism), ICRC Humanitarian Coverage Prize, Society for News Design.',
  },
  {
    date: '2018–2022',
    title: 'Frontend consultant — React at scale',
    description:
      'Built the HUK Autoservice storefront at foobar Agency — large-scale React, complex product flows, cross-functional and cross-cultural teams, close work with design from idea to delivery. foobar invited me to move to Germany after 3 months of good work.',
  },
  {
    date: '2022–now',
    title: 'Full-stack dev & product owner',
    description:
      'Built an entire product from scratch: infra and auth via Supabase, email via React Email + AWS SES, robust admin dashboards, E2E testing with Playwright. The project is secret (NDA) but the tech stack is solid.',
  },
  {
    date: '2024–now',
    title: 'Technical manager',
    description:
      "Led the migrations of Harvard Business Schools' external and internal sites — for Appnovation, a Canadian agency. From content model architecture through frontend React component building; an end-to-end process. Also managed and trained colleagues and contractors.",
  },
]

type Work = {
  title: string
  description: string
  tags: string[]
  url?: string
}

const works: Work[] = [
  {
    title: 'Folha de S.Paulo',
    description:
      'Design era. Print + digital infographics. "A World of Walls": 5 international awards.',
    tags: ['design', 'journalism', 'code'],
    url: 'https://arte.folha.uol.com.br/mundo/2017/a-world-of-walls/',
  },
  {
    title: 'HUK Autoservice',
    description:
      'Large-scale React storefront, German company. Complex product flows, cross-functional teams.',
    tags: ['react', 'consulting'],
    url: 'https://www.huk-autoservice.de/',
  },
  {
    title: 'Secret project',
    description:
      'Full ownership: event management platform. React Router 7, Supabase, AWS SES, React Email, Playwright E2E. Under NDA.',
    tags: ['react', 'full-stack', 'product'],
  },
  {
    title: 'Casa de Francisca',
    description:
      'Cultural venue website. TanStack Start, Directus CMS, Tailwind v4, Docker/Coolify deployment. In progress.',
    tags: ['react', 'full-stack', 'design'],
  },
  {
    title: 'Poem Printer',
    description:
      'Open-source project using Python and Raspberry Pi for a LGBTQIA+ cultural house.',
    tags: ['hardware', 'open-source'],
    url: 'https://github.com/angelod1as/recibo-poem-printer',
  },
]

const Strong: FCC = ({ children }) => (
  <strong className="text-highlight">{children}</strong>
)

const ColorLink: FCC<LinkProps> = props => (
  <Link className="text-highlight" {...props}>
    {props.children}
  </Link>
)

export function Resend() {
  return (
    <>
      <NewHead
        title="Angelo Dias for Resend"
        description="A decade at the intersection of communication, design, and code."
      />

      <HomeSection>
        <div>
          <h1>
            I'm angelo and I do <span className="text-highlight">stuff</span>
          </h1>
          <p className="font-black text-md md:text-2xl">
            and I want to do stuff for{' '}
            <span className="text-highlight">Resend</span>
          </p>
        </div>
      </HomeSection>

      <HomeSection>
        <p>
          Resend is building email infrastructure for developers. I've spent a
          decade connecting <Strong>communication</Strong>,{' '}
          <Strong>design</Strong>, and <Strong>code</Strong>. That's not a
          coincidence.
        </p>
      </HomeSection>

      <HomeSection>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-10 pl-[1.3rem] border-l-2 border-highlight">
            <h2>
              A <span className="text-highlight">generalist</span> timeline
            </h2>
            {beats.map(({ date, title, description }) => (
              <div key={date} className="relative">
                <div className="absolute -left-[calc(1.5rem+5px)] top-1 w-3 h-3 rounded-full bg-highlight" />
                <p className="m-0 text-sm text-gray-400">{date}</p>
                <p className="m-0 mt-1">
                  <Strong>{title}</Strong>
                </p>
                <p className="m-0 mt-2">{description}</p>
              </div>
            ))}
          </div>
          <p>
            I went <Strong>deep</Strong> on engineering on purpose. Just as the
            journalism background didn't go away, the extensive design
            experience made my work with design teams a <Strong>breeze</Strong>.
          </p>
          <p className="text-sm italic text-gray-400">
            I never stopped studying, and keep exploring different subjects.
            Now, living in a city with a university, I'm studying Psychology to
            better understand the human mind — after all, I work{' '}
            <Strong>for</Strong> and <Strong>with</Strong> people.
          </p>
        </div>
      </HomeSection>

      <HomeSection>
        <div className="flex flex-col gap-8">
          <h2>
            Where I <span className="text-highlight">fit</span>
          </h2>
          <p>
            I've been on <Strong>both sides</Strong> of the design-engineering
            handoff. I won't design what can't be built, and I won't build what
            ignores craft. I migrated from Adobe Suite (InDesign, Illustrator,
            XD) to <Strong>Figma</Strong> — used it for personal and commercial
            projects.
          </p>
          <p>
            My design work lives in <Strong>production</Strong>, not in
            portfolios. It's in the design systems I co-built with designers,
            the component libraries I shipped, and the products where I owned
            both sides. The print work from Folha is over a decade old — what
            replaced it is <Strong>closer to code than to canvas</Strong>.
          </p>
          <p>
            I maintain my own <Strong>open-source</Strong> projects and try my
            best to contribute to others. Open source has communication problems
            as much as technical ones — documentation, issues, and community
            matter as much as code.
          </p>
          <p>
            I have a journalism degree, award-winning storytelling experience,
            and years explaining complex systems to non-technical stakeholders.
            Ensuring <Strong>everyone understands</Strong> is my main mission.
          </p>
          <p>
            As side hobbies, I wrote a{' '}
            <ColorLink href="https://temposfantasticos.com/">
              sci-fi newspaper for three years
            </ColorLink>{' '}
            — it turned into a book — and kept a long-running newsletter at{' '}
            <ColorLink href="https://www.cronofobia.com">
              cronofobia.com
            </ColorLink>
            . I love writing, reading, studying, and, of course,{' '}
            <Strong>creating new stuff</Strong>.
          </p>
        </div>
      </HomeSection>

      <HomeSection>
        <div className="flex flex-col gap-8">
          <h2>
            Things I've <span className="text-highlight">built</span>
          </h2>
          <div className="flex flex-col gap-8">
            {works.map(work => (
              <div key={work.title} className="relative pl-6">
                <div className="absolute top-0 left-0 w-2 h-full bg-highlight" />
                <h3 className="text-highlight">{work.title}</h3>
                <p className="m-0 mt-2">{work.description}</p>
                {work.tags.length > 0 && (
                  <div className="flex gap-2 mt-2">
                    {work.tags.map(tag => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                )}
                {work.url && (
                  <div className="mt-3">
                    <CTA href={work.url} content="See it live" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </HomeSection>

      <HomeSection>
        <Recommendations Strong={Strong} ColorLink={ColorLink} />
      </HomeSection>

      <HomeSection>
        <p>
          I'm not looking for just any job. I'm looking for{' '}
          <Strong>this one</Strong>. If any of this resonates, I'd love to talk.
        </p>
        <p>
          <ColorLink href="/cv/angelo_dias-resume.docx" download>
            Download my resume
          </ColorLink>
        </p>
      </HomeSection>
    </>
  )
}
