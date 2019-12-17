import React from 'react';
// import uuid from 'uuid/v1';
import { domToReact } from 'html-react-parser';

import Video from './video';

const parseOptions = () => {
  return {
    replace: domNode => {
      // is TOC?
      if (domNode.name === 'ul') {
        const thisNode = domNode;

        const findHash = el => {
          const arr = [];

          const loop = item => {
            // if next is null is last item!
            if (item.data && item.data !== '\n') {
              if (item.next === null) {
                if (item.name === 'a') {
                  if (item.attribs && item.attribs.href) {
                    arr.push(item.attribs.href.includes('#'));
                  } else {
                    arr.push(false);
                  }
                } else {
                  arr.push(false);
                }
              } else {
                item.children.forEach(child => loop(child));
              }
            }
          };

          loop(el);

          return arr;
        };

        const hasHash = findHash(thisNode);
        const isToc = hasHash.length > 0 && !hasHash.includes(false);

        if (isToc && thisNode.parent === null) {
          return (
            <>
              <ul className="toc">{domToReact(thisNode.children)}</ul>
              <hr />
            </>
          );
        }

        return thisNode;
      }

      if (domNode.attribs) {
        if (domNode.attribs.class === 'video') {
          return (
            <Video title={domNode.attribs.title || 'Vídeo'} id={domNode.attribs['data-video']} />
          );
        }
        return domNode;
      }
      return domNode;
    },
  };
};

export default parseOptions;
