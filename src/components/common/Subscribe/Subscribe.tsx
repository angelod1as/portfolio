import { useColorContext } from '#components/templates/Providers/ColorProvider'
import React from 'react'
import { Link } from '../Links'
import { Strong } from '../Strong'

type SubscribeProps = {
  inner?: boolean
}

export const Subscribe = ({ inner }: SubscribeProps) => {
  const { colors } = useColorContext()

  return (
    <div>
      <h2 className={`mb-10`}>
        <span className={colors.textColor}>Subscribe</span> to my blog
        <p>
          Oops, subscriptions are{' '}
          <Strong color={colors.textColor}>closed</Strong> for now.{' '}
          <Link inner href="/blog/about-subscription">
            read here to know more.
          </Link>
        </p>
      </h2>
    </div>
  )
}

// export const Subscribe = ({ inner }: SubscribeProps) => {
// const { colors } = useColorContext()
//   const textColor = colors?.textColor ?? defaultTextColor[0]
//   const bgColor = colors?.bgColor ?? defaultBgColor[0]
//   const borderColor = colors?.borderColor ?? defaultBorderColor[0]

//   return (
//     <form method="post" action="https://blogtrottr.com">
// <h2 className={`mb-10 ${inner ? '' : 'h2-as-h1'}`}>
//   <span className={textColor}>Subscribe</span> to my blog
// </h2>
//       <div className="flex items-center gap-4 mb-8">
//         <label htmlFor="btr_email" className="whitespace-nowrap">
//           Your email:
//         </label>
//         <input
//           type="text"
//           name="btr_email"
//           id="btr_email"
//           placeholder="mrspock@enterprise.com"
//           className="w-full"
//         />

//         <input
//           type="hidden"
//           name="btr_url"
//           value="https://www.angelodias.com.br/rss/feed.xml"
//         />
//         <input type="hidden" name="schedule_type" value="0" />
//         <input
//           type="submit"
//           value="Follow"
//           className={`${bgColor} ${borderColor}`}
//         />
//       </div>
//       <p>
//         PS: I use a free service called{' '}
//         <a href="https://blogtrottr.com/">blogtrottr</a> to manage blog-to-email
//         posts instead of a full-blown newsletter service. It's free (for you and
//         for me) and very configurable.
//       </p>
//     </form>
//   )
// }
