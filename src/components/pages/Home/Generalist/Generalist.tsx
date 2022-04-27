import { Link } from '#components/common/Links'
import React from 'react'

export const Generalist = () => {
  return (
    <>
      <h2 className="h2-as-h1">I'm a proud generalist</h2>

      <div>
        <p>
          My main focus is <strong className="text-red">communication</strong>.
        </p>
        <p>
          I can integrate a{' '}
          <strong className=" text-yellow">multidisciplinary team</strong> and
          work out the <strong className="text-purple ">individuality</strong>{' '}
          of each member in order to deliver{' '}
          <strong className="text-green ">greater value</strong> to the customer
          and to the professionals.
        </p>
        <p>
          I actually like{' '}
          <strong className="text-violet ">being in meetings</strong> and{' '}
          <strong className=" text-lightpurple">organizing things</strong>. I'm
          a certified <strong className=" text-teal">Scrum Master</strong> but
          adapt well to different{' '}
          <strong className=" text-orange">Agile</strong> environments
        </p>
        <p>
          Also, I code using <strong className="text-blue">Typescript</strong>{' '}
          and <strong className="text-pink">React</strong>.{' '}
        </p>
        <Link>More about my coding skills here.</Link>
      </div>
    </>
  )
}
