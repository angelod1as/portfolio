import { Content, Grid, SidebarHolder } from './styles'
import Sidebar from '@components/sidebar'
import { BLOCKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { ITileFields } from 'src/@types/generated/contentful'
import { useCallback } from 'react'

interface TextProps {
  color: string
  content: ITileFields
}

export default function Text({ color, content: { title, content } }: TextProps) {
  // REFACTOR: colors should transition between them, nice effect

  const block = (content as any).json.content
  const contentReact = documentToReactComponents((content as any).json)

  return (
    <div>
      <h1>{title}</h1>
      <div>{contentReact}</div>
    </div>
    // <Grid>
    //   <SidebarHolder color={color}>
    //     <Sidebar
    //       excerpt={excerpt}
    //       live={live}
    //       path={path}
    //       type={type}
    //       title={title}
    //       from={from}
    //       singlePage
    //     />
    //   </SidebarHolder>
    //   <Content dangerouslySetInnerHTML={{ __html: content }} />
    // </Grid>
  )
}
