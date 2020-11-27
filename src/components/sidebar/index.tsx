import PropTypes from 'prop-types'
import styled from 'styled-components'
import parse from 'html-react-parser'
import Link from 'next/link'

import parserOptions from '@utils/parser'

// TODO: Review or entirely redesign

const H1 = styled.h1`
  font-weight: 700;
  margin: 30px 0 0 0;
  line-height: 1.3em;
  font-size: 24px;
  & + p {
    margin-top: 30px;
  }
`

const Live = styled.div`
  margin-top: 30px;
  color: ${(p) => p.theme.color.black};
  background-color: ${(p) => p.theme.color.black};
  font-size: 1.3em;
  text-align: center;
  transition: all 0.2s;
  cursor: pointer;
  a {
    color: ${(p) => p.theme.color.black};
    width: 100%;
    padding: 10px 20px;
    background-color: ${(p) => p.theme.color.white};
    text-decoration: none;
  }
  &:hover {
    a {
      color: ${(p) => p.theme.color.black};
      transform: translate(5px, -5px);
    }
  }
`

const BackLink = styled.a`
  padding-left: 20px;
  position: relative;
  color: ${(p) => p.theme.color.white};
  text-decoration: none;
  font-weight: 700;
  &:before {
    content: '‹';
    top: -6px;
    left: 0;
    position: absolute;
    font-size: 1.5em;
  }
  &:hover {
    color: ${(p) => p.theme.color.white};
    &:before {
      content: '«';
    }
  }
`

const ReadMoreLink = styled.a`
  background-color: ${(p) => p.theme.color.white};
  width: 100%;
  max-width: 300px;
  text-align: center;
  text-decoration: none;
  padding: 10px;
  /* border-radius: 5px; */
  &:hover {
    transform: translate(5px, -5px);
    box-shadow: -5px 5px 0px 0px rgba(0, 0, 0, 0.75);
  }
`

const Back = ({ to, children }) => {
  return (
    <Link href={to}>
      <BackLink>{children}</BackLink>
    </Link>
  )
}

const ReadMore = ({ to, children }) => {
  return (
    <Link href={to}>
      <ReadMoreLink>{children}</ReadMoreLink>
    </Link>
  )
}

const Sidebar = ({ from, type, title, excerpt, live, path, singlePage }) => {
  if (type === 'projects') {
    return (
      <>
        <Back to="/">back</Back>
        <H1>{title}</H1>
        {excerpt ? parse(excerpt, parserOptions) : ''}
        <ReadMore to={`${path}about`}>Know more</ReadMore>
      </>
    )
  }
  if (type === 'project' || type === 'text') {
    return (
      <>
        {from ? <Back to={from}>back</Back> : <Back to="/">back</Back>}
        <H1>{title}</H1>
        {live ? (
          <Live>
            <a href={live} target="_blank" rel="noopener noreferrer">
              See it live
            </a>
          </Live>
        ) : (
          ''
        )}
      </>
    )
  }
  if (type === '404') {
    return (
      <>
        <Back to="/">back</Back>
        <H1>{title}</H1>
      </>
    )
  }
  const backPath = path.replace('/about', '')
  return (
    <>
      <Back to={backPath}>back</Back>
      {singlePage ? <H1>{title}</H1> : <H1>About: {title}</H1>}
    </>
  )
}

Sidebar.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  live: PropTypes.string,
  from: PropTypes.string,
  singlePage: PropTypes.bool,
}

Sidebar.defaultProps = {
  singlePage: false,
  excerpt: null,
  live: null,
  from: null,
}

export default Sidebar
