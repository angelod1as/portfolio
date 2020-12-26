import Embed from '@components/atoms/Embed'
import Video from '@components/atoms/Video'
import { ICloudinary, IEmbed } from 'src/@types/generated/contentful'
import { Mosaic, Figure } from './styles'

const handleEmbedded = (node: { data: { target: any } }) => {
  const target = node?.data?.target
  const id = target?.sys?.contentType?.sys?.id
  if (id) {
    if (id === 'cloudinary') {
      const cloudinary: ICloudinary = target

      if (cloudinary.fields.contentful.length) {
        const {
          contentful,
          altDescription,
          decorators,
          caption,
        } = cloudinary.fields
        const alt = altDescription
        const contain = decorators && decorators.includes('contain')

        if (contentful.length === 1) {
          const url = contentful[0].url
          return (
            <Figure {...{ contain }}>
              <div>
                <img src={url} alt={alt} />
              </div>
              {caption && <figcaption>{caption}</figcaption>}
            </Figure>
          )
        }

        return (
          <Mosaic>
            <Figure {...{ contain }}>
              {contentful.map((each: { url: string }, i: any) => (
                <div key={`img-${alt}-${i}`}>
                  <img src={each.url} alt={alt} />
                </div>
              ))}
              {caption && <figcaption>{caption}</figcaption>}
            </Figure>
          </Mosaic>
        )
      }
    } else if (id === 'embed') {
      const embedded: IEmbed = target
      const { embed, youtubeId } = embedded.fields

      if (embed) {
        return <Embed embed={embed}></Embed>
      } else if (youtubeId) {
        return <Video id={youtubeId} />
      }
    }
    return <div data-error="content-type not conFigured for display"></div>
  }
}

export default handleEmbedded
