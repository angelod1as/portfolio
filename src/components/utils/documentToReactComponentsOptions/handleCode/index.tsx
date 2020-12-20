import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
// import Highlighter from 'react-syntax-highlighter'

hljs.registerLanguage('javascript', javascript)

export default function handleCode(node, children) {
  return (
    <p>
      {children.map(each => {
        if (typeof each === 'string') {
          return each
        } else {
          if (each.type === 'code') {
            if (children.length > 1) {
              return (
                <pre className="inline">
                  <code
                    dangerouslySetInnerHTML={{
                      __html: hljs.highlightAuto(each.props.children).value,
                    }}
                  ></code>
                </pre>
              )
            } else {
              return (
                <pre className="block">
                  <code
                    dangerouslySetInnerHTML={{
                      __html: hljs.highlightAuto(each.props.children).value,
                    }}
                  ></code>
                </pre>
              )
            }
          } else {
            return each
          }
        }
      })}
    </p>
  )

  // if (node.content && node.content.length > 0) {
  //   // nao ta vazio
  //   if (node.content.length > 1) {
  //     // tem mais de um elemento no nó
  //     node.content.forEach(each => {
  //       if (each.marks && each.marks.length > 0) {
  //         // tem marks
  //         each.marks.forEach(mark => {
  //           if (mark.type === 'code') {
  //             console.log('foi')
  //           }
  //         })
  //       }
  //     })
  //   } else {
  //     // console.log('menor', node)
  //   }
  // }

  // if (node.content && node.content.length > 0) {
  //   node.content.forEach((each, i) => {
  //     console.log(each)

  //     if (each.marks && each.marks.length > 0) {
  //       each.marks.forEach(mark => {
  //         if (mark.type === 'code') {
  //           // console.log(node.content[i])
  //         }
  //       })
  //     }
  //   })
  //   // if (node.content.nodeType === '')
  // }

  return documentToReactComponents(node)

  //   <p>
  //   {children.map(each => {
  //     if (typeof each === 'string') {
  //       return each
  //     } else {
  //       console.log(children.length)
  //       if (each.type === 'code') {
  //         if (children.length > 1) {
  //           return each
  //         } else {
  //           return <pre>{each}</pre>
  //         }
  //       } else {
  //         return each
  //       }
  //     }
  //   })}
  // </p>

  // if (node.content && node.content.length > 0) {
  //   node.content.forEach(each => {
  //     if (each.marks && each.marks.length > 0) {
  //       each.marks.forEach(mark => {
  //         if (mark.type === 'code') {
  //           // console.log(node)
  //         }
  //       })
  //     }
  //   })
  //   // if (node.content.nodeType === '')
  // }
}
