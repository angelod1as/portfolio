import React from 'react'
import { BgColor } from 'src/helpers/colors'
import github from 'public/social/github.svg'
import telegram from 'public/social/telegram.svg'
import instagram from 'public/social/instagram.svg'
import twitter from 'public/social/twitter.svg'
import linkedin from 'public/social/linkedin.svg'
import Image from 'next/image'
import { Link } from '#components/common/Links'

export function Contact() {
  return (
    <div className="max-w-xl m-auto">
      <h2 className="text-7xl">contact me anytime</h2>

      <div className="flex justify-between gap-4 mt-10">
        <Social color="bg-teal" href="https://github.com/angelod1as">
          <Image src={github} alt="github" width={40} height={40} />
        </Social>
        <Social color="bg-red" href="https://twitter.com/oicronofobico">
          <Image src={twitter} alt="twitter" width={40} height={40} />
        </Social>
        <Social color="bg-blue" href="https://instagram.com/oicronofobico">
          <Image src={instagram} alt="instagram" width={40} height={40} />
        </Social>
        <Social color="bg-green" href="https://t.me/oicronofobico">
          <Image src={telegram} alt="telegram" width={40} height={40} />
        </Social>
        <Social color="bg-purple" href="">
          <Image src={linkedin} alt="linkedin" width={40} height={40} />
        </Social>
      </div>
    </div>
  )
}

type Props = {
  children: React.ReactNode
  href: string
  color: BgColor
}

const Social = ({ children, href, color }: Props) => (
  <Link
    href={href}
    className={`flex items-center justify-center h-24 w-24 p-2 ${color}`}
  >
    {children}
  </Link>
)
