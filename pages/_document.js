import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Preconnect to external domains for performance */}
          <link rel="preconnect" href="https://www.googletagmanager.com" />
          <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
          <link rel="preconnect" href="https://chimpstatic.com" />
          <link rel="preconnect" href="https://analytics.ahrefs.com" />
          <link rel="preconnect" href="https://cdn.viglink.com" />
          
          {/* DNS prefetch for additional performance */}
          <link rel="dns-prefetch" href="//fonts.googleapis.com" />
          <link rel="dns-prefetch" href="//www.google-analytics.com" />
          
          {/* Structured Data - Organization */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Try Ortho Keys",
                "url": "https://tryorthokeys.com",
                "logo": "https://tryorthokeys.com/tryorthokeys.jpg",
                "description": "Ortholinear keyboards are computer keyboards with a grid layout. An ortho keyboard usually has mechanical key switches and programmable keymappings.",
                "sameAs": [
                  "https://twitter.com/tryorthokeys"
                ],
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "customer service",
                  "availableLanguage": "English"
                }
              })
            }}
          />
          
          {/* Structured Data - Website */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Try Ortho Keys",
                "url": "https://tryorthokeys.com",
                "description": "Ortholinear keyboards are computer keyboards with a grid layout. An ortho keyboard usually has mechanical key switches and programmable keymappings.",
                "publisher": {
                  "@type": "Organization",
                  "name": "Try Ortho Keys",
                  "logo": "https://tryorthokeys.com/tryorthokeys.jpg"
                },
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://tryorthokeys.com/search?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              })
            }}
          />

          {/* Google AdSense */}
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7303268260949065"
            crossOrigin="anonymous"
          ></script>
          
          {/* Google Analytics */}
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
              gtag("config", "G-2N26P4HEDD", {
                page_title: document.title,
                page_location: window.location.href
              });
            `,
            }}
          />

          {/* Mailchimp */}
          <script
            id="mcjs"
            dangerouslySetInnerHTML={{
              __html: `!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/9d8a3440190c7038888502308/32edc0eb1cf71aeab8c219b96.js");`,
            }}
          />
          
          {/* Ahrefs Analytics */}
          <script src="https://analytics.ahrefs.com/analytics.js" data-key="H3Q9q6ezPn3JM39t5g7lOw" async></script>
        </Head>

        <body>
          <Main />
          <NextScript />

          {/* Viglink */}
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
