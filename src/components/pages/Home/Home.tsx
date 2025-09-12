import { HomeSection } from '#components/common/HomeSection'
import { Link, LinkProps } from '#components/common/Links'
import { FCC } from '#types/types'
import {
  Am,
  Colophon,
  Generalist,
  Opening,
  Recommendations,
  Want,
  Was,
} from './Sections'

const sections = [
  {
    Component: Opening,
  },
  {
    Component: Generalist,
  },
  {
    Component: Want,
  },
  {
    Component: Am,
  },
  {
    Component: Was,
  },
  {
    Component: Recommendations,
  },
]

export function Home() {
  return (
    <>
      {sections.map(({ Component }, index) => {
        const Strong: FCC = ({ children }) => (
          <strong className="text-highlight">{children}</strong>
        )

        const ColorLink: FCC<LinkProps> = props => (
          <Link className="text-highlight" {...props}>
            {props.children}
          </Link>
        )

        return (
          <HomeSection key={index}>
            <Component Strong={Strong} ColorLink={ColorLink} />
          </HomeSection>
        )
      })}
      <Colophon />
    </>
  )
}
