import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const handleSummary = (node, prefix) => {
  const compo = documentToReactComponents(node)

  const loopCompo = (currCompo, run) => {
    if (currCompo?.type === 'a') {
      if (currCompo?.props?.href) {
        currCompo.props.href = `${prefix}${currCompo?.props?.href}`
      }
    } else {
      currCompo?.props?.children?.forEach(nextCompo => {
        loopCompo(nextCompo, run + 1)
      })
    }

    return currCompo
  }

  loopCompo(compo, 1)

  return compo
}

export default handleSummary
