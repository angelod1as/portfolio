import Video from '@components/atoms/Video'
import {
  ICloudinary,
  ICloudinaryFields,
  IEmbed,
} from 'src/@types/generated/contentful'
import { Mosaic, Figure } from './styles'
import Embed from 'react-responsive-embed'

const handleImage = (node: { data: { target: any } }) => {
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
      const { title, code, embed, youtubeId } = embedded.fields

      if (code) {
        console.log(code)
      } else if (embed) {
        console.log(embed)
      } else if (youtubeId) {
        return <Video id={youtubeId} />
      }

      // embed
      // youtubeId
      // code
    }
    return <div data-error="content-type not conFigured for display"></div>
  }
}

export default handleImage
