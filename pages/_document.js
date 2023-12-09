import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" 
          rel="stylesheet" 
      />
      <Head />
      <body className='m-0'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
