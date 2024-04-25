import React from 'react'

type AudioProps = {
  src: string
  type?: string
}

export const Audio = ({ src, type = 'audio/mpeg' }: AudioProps) => {
  return (
    // eslint-disable-next-line jsx-a11y/media-has-caption
    <audio controls className="w-full">
      <source src={src} type={type} />
      Your browser does not support the audio element.
    </audio>
  )
}
