import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7303268260949065"
            crossOrigin="anonymous"
          ></script>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-2N26P4HEDD"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() {
                dataLayer.push(arguments);
              }
              gtag("js", new Date());
              
              gtag("config", "G-2N26P4HEDD");
              
            `,
            }}
          />
        </Head>

        <body>
          <Main />
          <NextScript />

          <script
            dangerouslySetInnerHTML={{
              __html: `
              var vglnk = {key: 'bbc465c172eb50e9c932d17fe8e95297'};
              (function(d, t) {
                  var s = d.createElement(t);
                      s.type = 'text/javascript';
                      s.async = true;
                      s.src = '//cdn.viglink.com/api/vglnk.js';
                  var r = d.getElementsByTagName(t)[0];
                      r.parentNode.insertBefore(s, r);
              }(document, 'script'));
            `,
            }}
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
