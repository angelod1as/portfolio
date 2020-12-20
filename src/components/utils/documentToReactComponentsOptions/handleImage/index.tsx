import { ICloudinary } from 'src/@types/generated/contentful'
import { Mosaic, Figure } from './styles'

const handleImage = (node: { data: { target: ICloudinary } }) => {
  const target = node?.data?.target
  const id = target?.sys?.contentType?.sys?.id
  if (id && id === 'cloudinary') {
    if (target.fields.contentful.length) {
      const { contentful, altDescription, decorators, caption } = target.fields
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
  }
  return <div data-error="content-type not conFigured for display"></div>
}

export default handleImage
