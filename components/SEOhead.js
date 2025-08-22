import Head from "next/head";
import { defaultMeta } from "../lib/pageMeta";

export default function SEOhead({ meta }) {
  return (
    <Head>
      <title>
        {meta ? meta.title + " | " + defaultMeta.title : defaultMeta.title}
      </title>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="title"
        content={
          meta ? meta.title + " | " + defaultMeta.title : defaultMeta.title
        }
      />
      <meta
        name="description"
        content={meta ? meta.description : defaultMeta.description}
      />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={meta ? meta.slug + " | " + defaultMeta.slug : defaultMeta.slug}
      />
      <meta
        property="og:title"
        content={
          meta ? meta.title + " | " + defaultMeta.title : defaultMeta.title
        }
      />
      <meta
        property="og:description"
        content={meta ? meta.description : defaultMeta.description}
      />
      <meta
        property="og:image"
        content={
          meta ? meta.image + " | " + defaultMeta.image : defaultMeta.image
        }
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content={
          meta ? meta.image + " | " + defaultMeta.image : defaultMeta.image
        }
      />
      <meta
        property="twitter:title"
        content={
          meta ? meta.title + " | " + defaultMeta.title : defaultMeta.title
        }
      />
      <meta
        property="twitter:description"
        content={meta ? meta.description : defaultMeta.description}
      />
      <meta
        property="twitter:image"
        content={
          meta ? meta.image + " | " + defaultMeta.image : defaultMeta.image
        }
      />
    </Head>
  );
}
