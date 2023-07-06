import QuestionCard, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends QuestionCard {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Inter:wght@100;200;400&family=Josefin+Sans:ital,wght@1,200;1,700&family=Orbitron:wght@400;600&family=Roboto:wght@400;700&family=Syncopate:wght@400;700&family=Urbanist:wght@100;300;500&display=swap"
            rel="stylesheet"
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

export default MyDocument;
