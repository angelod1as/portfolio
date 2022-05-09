import React, { FC } from 'react'
import { bgColor, BgColor, RandomColors } from 'src/helpers/colors'
import github from 'public/social/github.svg'
import telegram from 'public/social/telegram.svg'
import instagram from 'public/social/instagram.svg'
import twitter from 'public/social/twitter.svg'
import linkedin from 'public/social/linkedin.svg'
import Image from 'next/image'
import { Link } from '#components/common/Links'

type ContactProps = {
  colors: RandomColors
}

export const Contact: FC<ContactProps> = ({ colors }) => {
  return (
    <div className="max-w-xl p-4 m-auto">
      <h2 className="h2-as-h1">
        contact me <span className={colors.textColor}>anytime</span>
      </h2>

      <div className="flex justify-between gap-4 mt-10">
        <Social color={bgColor[0]} href="https://github.com/angelod1as">
          <Image src={github} alt="github" width={40} height={40} />
        </Social>
        <Social color={bgColor[1]} href="https://twitter.com/oicronofobico">
          <Image src={twitter} alt="twitter" width={40} height={40} />
        </Social>
        <Social color={bgColor[2]} href="https://instagram.com/oicronofobico">
          <Image src={instagram} alt="instagram" width={40} height={40} />
        </Social>
        <Social color={bgColor[3]} href="https://t.me/oicronofobico">
          <Image src={telegram} alt="telegram" width={40} height={40} />
        </Social>
        <Social color={bgColor[4]} href="">
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
    className={`flex  items-center justify-center h-10 w-10 md:h-24 md:w-24 p-2 ${color}`}
  >
    {children}
  </Link>
)
