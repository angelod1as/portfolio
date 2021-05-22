import Embed from '@components/atoms/Embed'
import Video from '@components/atoms/Video'
import { ICloudinary, IEmbed } from 'src/@types/generated/contentful'
import { NodeProps } from '..'
import { Mosaic, Figure } from './styles'

const buildCloudinary = ({ target: { fields } }: { target: ICloudinary }) => {
  const { contentful, altDescription, decorators, caption } = fields
  if (contentful?.length) {
    const contain = decorators && decorators.includes('contain')
    const decoratorsString = decorators ? decorators.join(' ') : ''

    if (contentful.length === 1) {
      const url = contentful[0].url
      return (
        <Figure className={decoratorsString} {...{ contain }}>
          <div>
            <div>
              <img src={url} alt={altDescription} />
            </div>
            {caption && <figcaption>{caption}</figcaption>}
          </div>
        </Figure>
      )
    }

    return (
      <Mosaic>
        <Figure className={decoratorsString} {...{ contain }}>
          {contentful.map((each: { url: string }, i: any) => (
            <div key={`img-${altDescription}-${i}`}>
              <img src={each.url} alt={altDescription} />
            </div>
          ))}
          {caption && <figcaption>{caption}</figcaption>}
        </Figure>
      </Mosaic>
    )
  }
  return null
}

const buildEmbed = ({ target }: { target: IEmbed }) => {
  const { embed, youtubeId } = target.fields

  if (embed) {
    return <Embed embed={embed}></Embed>
  } else if (youtubeId) {
    return <Video id={youtubeId} />
  }
  return null
}

const handleEmbedded = (node: NodeProps) => {
  const target = node?.data?.target
  const id = target?.sys?.contentType?.sys?.id
  if (id && target) {
    if (id === 'cloudinary') {
      return buildCloudinary({ target } as { target: ICloudinary })
    } else if (id === 'embed') {
      return buildEmbed({ target } as { target: IEmbed })
    }
    return (
      <div
        data-testid="error"
        data-error="content-type not conFigured for display"
      />
    )
  }
  return null
}

export default handleEmbedded
