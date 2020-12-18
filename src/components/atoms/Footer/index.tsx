import {
  FooterWrapper,
  BlogPosts,
  Post,
  Newsletter,
  Social,
  Title,
} from './styles'

interface Post {
  title: string
  lead: string
  date: string
}

export interface FooterProps {
  // What background color to use
  backgroundColor: string
  // Latest blog posts
  blogPosts: Post[] // TODO: type
  // Has newsletter
  newsletter: boolean
  // Include social links
  social: {
    [index: string]: string
  }[]
}

/**
 * Page footer with latest blog posts, newsletter and social icons
 */
export const Footer = ({
  backgroundColor,
  blogPosts,
  newsletter,
  social,
}: FooterProps) => {
  return (
    <FooterWrapper {...{ backgroundColor }}>
      {blogPosts?.length > 0 && (
        <BlogPosts>
          <Title>
            Latest <span>blog posts</span>
          </Title>
          {blogPosts.map(({ title, lead, date }, i) => (
            <Post key={'post' + i}>
              <h4>{title}</h4>
              <p>
                {lead}
                <span>{date}</span>
              </p>
            </Post>
          ))}
        </BlogPosts>
      )}
      {newsletter && (
        <Newsletter>
          <Title>
            Sign up my <span>newsletter</span>
          </Title>
        </Newsletter>
      )}
      {social?.length > 0 && (
        <Social>
          <Title>
            Let's talk about <span>stuff</span>
          </Title>
        </Social>
      )}
    </FooterWrapper>
  )
}
