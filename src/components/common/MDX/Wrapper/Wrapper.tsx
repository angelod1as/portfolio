import { PageType } from '#lib/common/fetchAllPages'
import { FCC, Metadata } from '#types/types'
import { MDXRemote } from 'next-mdx-remote'
import Image from 'next/image'
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
  const { compiledTitle, description } = metadata

  const containerStyles = `
  ${styles.container}
  ${type === 'blog' || type === 'projects' ? styles.article : ''}
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
      {metadata.hero?.src && (
        <div className="mb-4">
          <Image
            src={metadata.hero.src}
            alt={metadata.hero.alt}
            width={350}
            height={350}
          />
        </div>
      )}
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
