import { PageType } from '#lib/common/fetchAllPages'
import { FCC, Metadata } from '#types/types'
import { MDXRemote } from 'next-mdx-remote'
import React from 'react'
import { MDXComponents } from '../parseComponents'
import { BlogPostWrapper } from './BlogPostWrapper'
import { ProjectWrapper } from './ProjectWrapper'
import styles from './Wrapper.module.sass'

type WrapperProps = {
  metadata: Metadata
  titleComponents: MDXComponents | undefined
  type: PageType
}

export const Wrapper: FCC<WrapperProps> = ({
  children,
  metadata,
  titleComponents,
  type,
}) => {
  console.log(':DEV type: ', type)
  const { compiledTitle, description } = metadata

  const containerStyles = `
  ${styles.container}
  ${type === 'blog' ? styles.blogPost : ''}
  `

  const buildWrapped = (type: PageType) => {
    switch (type) {
      case 'blog':
        return <BlogPostWrapper metadata={metadata}>{children}</BlogPostWrapper>
      case 'projects':
        return <ProjectWrapper metadata={metadata}>{children}</ProjectWrapper>
      default:
        return children
    }
  }

  return (
    <div className={containerStyles}>
      {compiledTitle && (
        <MDXRemote
          compiledSource={compiledTitle}
          components={titleComponents}
        />
      )}

      {description && (
        <p className="mb-8 text-xl text-gray-400">{metadata.description}</p>
      )}

      {buildWrapped(type)}
    </div>
  )
}
