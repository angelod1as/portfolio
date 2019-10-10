import React from 'react';
import uuid from 'uuid/v1';

import Video from './video';

const parseOptions = () => {
  return {
    replace: domNode => {
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
