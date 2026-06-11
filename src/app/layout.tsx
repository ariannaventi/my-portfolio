import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Arianna Andrei Rufila — Frontend Developer',
  description: 'Frontend Developer & UI/UX Designer based in Cebu City, Philippines.',
  openGraph: {
    title: 'Arianna Andrei Rufila',
    description: 'Building interfaces that are both functional and beautiful.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@1,300&family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&family=Onest:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
