import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <title>Jezz's Portfolio</title>
                <link rel="shortcut icon" href="/img/common/favicon.png" />
                <meta name="description" content="A collection of screencaps, videos, and live demos of UI/UX projects programmed by Jezz Lucena."/>

                <meta property="og:title" content="Portfolio - Jezz Lucena"/>
                <meta property="og:url" content="https://jezzlucena.com/"/>
                <meta property="og:image" content="https://jezzlucena.com/resource/common/logo.jpg"/>
                <meta property="og:site_name" content="Portfolio - Jezz Lucena"/>
                <meta property="og:description" content="A collection of screencaps, videos, and live demos of UI/UX projects programmed by Jezz Lucena."/>
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    )
}
