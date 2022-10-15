import Head from "next/head";

import { siteurl, defaultMeta } from "../lib/pageMeta";
import router, { useRouter } from "next/router";

export default function SEOHead({ meta }) {
  return (
    <Head>
      <title>
        {meta && meta.hasOwnProperty("title")
          ? meta.hasOwnProperty("metatitle")
            ? meta.metatitle + " - " + defaultMeta.title
            : meta.title + " - " + defaultMeta.title
          : defaultMeta.title}
      </title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta
        name="Description"
        content={
          meta && meta.hasOwnProperty("description")
            ? meta.description
            : defaultMeta.description
        }
      ></meta>
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={meta.slug ? siteurl + "" + meta.slug : defaultMeta.url}
      />
      <meta
        property="og:title"
        content={
          meta && meta.hasOwnProperty("title")
            ? meta.title + " - " + defaultMeta.title
            : defaultMeta.title
        }
      />
      <meta
        property="og:description"
        content={
          meta && meta.hasOwnProperty("description")
            ? meta.description
            : defaultMeta.description
        }
      />
      <meta
        property="og:image"
        content={
          meta && meta.hasOwnProperty("image")
            ? siteurl + meta.image
            : defaultMeta.image
        }
      />
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content={meta.slug ? defaultMeta.url + meta.slug : defaultMeta.url}
      />
      <meta
        property="twitter:title"
        content={
          meta && meta.hasOwnProperty("title")
            ? meta.title + " - " + defaultMeta.title
            : defaultMeta.title
        }
      />
      <meta
        property="twitter:description"
        content={
          meta && meta.hasOwnProperty("description")
            ? meta.description
            : defaultMeta.description
        }
      />
      <meta
        property="twitter:image"
        content={
          meta && meta.hasOwnProperty("image")
            ? siteurl + meta.image
            : defaultMeta.image
        }
      />
    </Head>
  );
}
