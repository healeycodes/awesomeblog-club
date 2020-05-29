import Document, { Head, Html, Main, NextScript } from "next/document";

class DeAmpBotDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <link rel="manifest" href="/manifest.json" />
          <meta ref="theme-color" content="#181818" />
          <link rel="icon" type="image/png" href="/images/icon-512.png" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link
            rel="stylesheet"
            href="https://fonts.xz.style/serve/inter.css"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/@exampledev/new.css@1.1.2/new.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default DeAmpBotDocument;
