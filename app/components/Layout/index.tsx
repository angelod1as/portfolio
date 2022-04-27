import { Outlet } from '@remix-run/react'
import { TopBar } from '../TopBar'

export const Layout = () => (
  <div className="relative flex flex-col items-center h-full min-h-screen">
    <TopBar />
    <div className="max-w-lg px-4 py-16">
      <Outlet />
    </div>
  </div>
)
