import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import BackgroundLayers from '@/components/BackgroundLayers'

const poppins = Poppins({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'My portfolio by Aleja',
  description: 'A beautiful portfolio showcasing creative projects and skills',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-white text-slate-900`}>
        <BackgroundLayers />
        {children}
      </body>
    </html>
  )
}