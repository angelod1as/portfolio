import { Content, Grid, SidebarHolder } from './styles'
import Sidebar from '@components/sidebar'

export default function Text({
  color,
  children,
  content: { excerpt, live, path, title, from, type, content },
}) {
  // REFACTOR: colors should transition between them, nice effect
  return (
    <Grid>
      <SidebarHolder color={color}>
        <Sidebar
          excerpt={excerpt}
          live={live}
          path={path}
          type={type}
          title={title}
          from={from}
          singlePage
        />
      </SidebarHolder>
      <Content>{children}</Content>
    </Grid>
  )
}
