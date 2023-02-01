import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.js"
          integrity="sha512-UgS0SVyy/0fZ0i48Rr7gKpnP+Jio3oC7M4XaKP3BJUB/guN6Zr4BjU0Hsle0ey2HJvPLHE5YQCXTDrx27Lhe7A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        ></script>

        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/plugins/animation.gsap.js"
          integrity="sha512-judXDFLnOTJsUwd55lhbrX3uSoSQSOZR6vNrsll+4ViUFv+XOIr/xaIK96soMj6s5jVszd7I97a0H+WhgFwTEg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        ></script>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
