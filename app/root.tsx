import type { MetaFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import { Layout } from './components/Layout'

import styles from './styles/app.css'

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
})

export function links() {
  return [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,400;0,700;1,400;1,700&family=Montserrat:ital,wght@0,400;0,700;1,400;1,700&display=swap',
    },
    { rel: 'stylesheet', href: styles },
  ]
}

export default function App() {
  return (
    <html lang="en" className="bg-black">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
