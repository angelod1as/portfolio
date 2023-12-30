import React from 'react'
import { bgColor, BgColor } from 'src/helpers/colors'
import github from 'public/social/github.svg'
import telegram from 'public/social/telegram.svg'
import linkedin from 'public/social/linkedin.svg'
import Image from 'next/image'
import { Link } from '#components/common/Links'
import { useColorContext } from '#components/templates/Providers/ColorProvider'
import { FCC } from '#types/types'

export const Contact: FCC = () => {
  const { colors } = useColorContext()

  return (
    <div>
      <h2 className="h2-as-h1">
        Contact me <span className={colors.textColor}>anytime</span>
      </h2>

      <div className="flex justify-start gap-4 mt-10">
        <Social color={bgColor[1]} href="https://github.com/angelod1as">
          <Image src={github} alt="github" width={40} height={40} />
        </Social>
        <Social color={bgColor[2]} href="https://t.me/oicronofobico">
          <Image src={telegram} alt="telegram" width={40} height={40} />
        </Social>
        <Social
          color={bgColor[3]}
          href="https://www.linkedin.com/in/angelod1as/"
        >
          <Image src={linkedin} alt="linkedin" width={40} height={40} />
        </Social>
      </div>
    </div>
  )
}

type SocialProps = {
  children: React.ReactNode
  href: string
  color: BgColor
}

const Social: FCC<SocialProps> = ({ children, href, color }) => (
  <Link
    href={href}
    className={`flex  items-center justify-center h-10 w-10 md:h-24 md:w-24 p-2 ${color}`}
  >
    {children}
  </Link>
)
