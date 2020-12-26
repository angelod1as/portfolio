import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import { nanoid } from 'nanoid'
import { ReactNode } from 'react'

hljs.registerLanguage('javascript', javascript)

interface CodeProps {
  type: string
  props: {
    children: ReactNode
  }
}

export default function handleCode(node, children) {
  let isPre = false
  const map = children.map((each: CodeProps) => {
    if (each && each.type && each.type === 'code') {
      if (children.length > 1) {
        return (
          <code
            key={nanoid()}
            dangerouslySetInnerHTML={{
              __html: hljs.highlightAuto(each.props.children).value,
            }}
          ></code>
        )
      } else {
        isPre = true
        return (
          <pre key={nanoid()} className="block">
            <code
              dangerouslySetInnerHTML={{
                __html: hljs.highlightAuto(each.props.children).value,
              }}
            ></code>
          </pre>
        )
      }
    }
    return each
  })

  if (isPre) {
    return map
  }
  return <p key={nanoid()}>{map}</p>
}
