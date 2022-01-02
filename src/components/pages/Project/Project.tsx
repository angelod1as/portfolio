import { Tags } from '#components/common/Tags'
import { ProjectFrontMatterWithSlug } from '#types/types'
import React from 'react'

export type ProjectProps = {
  project: ProjectFrontMatterWithSlug
}

export const Project = ({
  project: {
    data: { title },
  },
}: ProjectProps) => {
  return (
    <>
      <h1>{title}</h1>

      <Tags tags={['coding', 'writing']} />

      <p>TOC</p>
      <ul>
        <li>Summary</li>
        <li>Coding</li>
        <li>Desing</li>
        <li>Awards</li>
      </ul>

      <h2>Summary</h2>

      <p>TL;DR</p>
      <ul>
        <li>This</li>
        <li>That</li>
      </ul>

      <div>PHOTO INSIDE</div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        error architecto corporis quae nam, nostrum neque atque rem, quidem
        facilis dolores at quibusdam iure autem? Ipsum eius perspiciatis omnis
        eveniet?
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, molestias
        officiis facilis recusandae saepe quaerat dignissimos provident sed
        natus dolorem fuga, neque illum. Rem itaque voluptate sint recusandae
        temporibus voluptates.
      </p>

      <h2>Coding</h2>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, molestias
        officiis facilis recusandae saepe quaerat dignissimos provident sed
        natus dolorem fuga, neque illum. Rem itaque voluptate sint recusandae
        temporibus voluptates.
      </p>

      <div>
        <h2>Share this</h2>
      </div>

      <div>
        <h2>Possibly related</h2>
      </div>
    </>
  )
}
