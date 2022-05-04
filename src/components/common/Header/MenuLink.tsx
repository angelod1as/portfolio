import { useRouter } from 'next/router'
import { FC } from 'react'
import { Link } from '../Links'

type MenuLinkProps = {
  href: string
  content: string
}
export const MenuLink: FC<MenuLinkProps> = ({ href, content }) => {
  const { asPath } = useRouter()

  if (asPath === `${href}`) {
    return <span className="font-bold">{content}</span>
  }

  return (
    <Link inner href={href}>
      {content}
    </Link>
  )
}
