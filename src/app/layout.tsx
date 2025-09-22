import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ask My Copilot - AI Agent Setup Platform',
  description: 'The ultimate platform for setting up AI agents, accessing workshops, and getting prebuilt automation solutions.',
  keywords: ['AI', 'agents', 'automation', 'copilot', 'workshops', 'docker'],
  authors: [{ name: 'Ask My Copilot Team' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}