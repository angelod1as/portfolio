import React from 'react'

export type TOCItem = {
  title: string
  link: string
}
export type TOCGroup = TOCItem[]

type Props = {
  toc: TOCGroup
}

// Element.scrollIntoView()

export const TOC = ({ toc }: Props) => {
  return (
    <div>
      <h3>Table of Contents</h3>

      <ul>
        {toc.map((item, idx) => (
          <li key={`${item.link}-${idx}`} className="italic">
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
