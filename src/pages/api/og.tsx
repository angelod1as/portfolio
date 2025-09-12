import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const config = {
  runtime: 'edge',
}

export default async function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)

    // Get parameters from URL
    const title = searchParams.get('title') || 'Angelo Dias'
    const description = searchParams.get('description') || ''
    const type = searchParams.get('type') || 'social' // social or instagram

    // Set dimensions based on type
    const width = type === 'instagram' ? 1200 : 1200
    const height = type === 'instagram' ? 1200 : 630

    return new ImageResponse(
      (
        <div
          style={{
            background: 'black',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            padding: '40px 60px',
            fontFamily: 'sans-serif',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            <p
              style={{
                fontSize: 24,
                fontWeight: 'bold',
                color: 'white',
                margin: 0,
              }}
            >
              angelodias.com.br
            </p>

            <h1
              style={{
                fontSize: type === 'instagram' ? 80 : 72,
                fontWeight: 700,
                color: 'white',
                margin: 0,
                lineHeight: 1,
                maxWidth: 900,
              }}
              dangerouslySetInnerHTML={{
                __html: title
                  .replace(
                    /\*\*(.*?)\*\*/g,
                    '<span style="color: #f2ca19">$1</span>'
                  )
                  .replace(
                    /__(.*?)__/g,
                    '<span style="color: #aa5fff">$1</span>'
                  )
                  .replace(
                    /~~(.*?)~~/g,
                    '<span style="color: #ff55d2">$1</span>'
                  )
                  .replace(
                    /\^\^(.*?)\^\^/g,
                    '<span style="color: #5996ff">$1</span>'
                  )
                  .replace(
                    /\+\+(.*?)\+\+/g,
                    '<span style="color: #87e911">$1</span>'
                  )
                  .replace(
                    /--(.*?)--/g,
                    '<span style="color: #f95b2b">$1</span>'
                  ),
              }}
            />

            {description && (
              <h2
                style={{
                  fontSize: 36,
                  fontWeight: 400,
                  color: 'white',
                  margin: 0,
                  lineHeight: 1.2,
                  maxWidth: 900,
                }}
              >
                {description}
              </h2>
            )}
          </div>
        </div>
      ),
      {
        width,
        height,
      }
    )
  } catch (e: unknown) {
    // eslint-disable-next-line no-console
    console.log(`${(e as Error).message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
