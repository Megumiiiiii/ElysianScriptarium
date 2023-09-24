import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  head: (
    <>
      <link rel="icon" href="./favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:site_name" content="ElysianScriptarium" />
      <title>ElysianScriptarium</title>
      <meta property="og:title" content="ElysianScriptarium" />
      <meta name="description" content="ElysianScriptarium is permaweb." />
      <meta property="og:description" content="ElysianScriptarium is permaweb." />
    </>
  ),
  primaryHue: {
    dark: 310,
    light: 310
   },
  logo: (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width="31.8" height="31.8" viewBox="0 0 50 50">
      <path 
      fill="currentColor"
      d="M16.1 1.7C7.3 4.8 0 15.3 0 25c0 13.2 11.8 25 25 25 6 0 13-3 17.5-7.5C61.3 23.7 41.3-7.2 16.1 1.7zm17.7 4.2C41.4 9.8 46 17 46 25c0 11.4-9.6 21-21 21S4 36.4 4 25C4 17 8.7 9.8 16.5 5.7c4.2-2.3 12.7-2.1 17.3.2z" />
      <path 
      fill="currentColor"
      d="m19.8 17.2-2.3 2.3 2.3.3c1.3.2 2.9-.2 3.7-.8 1.7-1.4 5.5-.4 5.5 1.4 0 .8-1.7 1.6-4 1.9-5.1.7-7 2.2-7 5.7 0 3.2 2 5.2 5.2 5.1 1.3 0 4.2 0 6.6-.1H34v-6.4c0-8.3-2.3-11.6-8.1-11.6-2.7 0-4.6.7-6.1 2.2zm9.2 9.1c0 1.8-2.1 3.7-4.1 3.7-2.2 0-3.3-1.6-2.5-3.5.7-1.9 6.6-2 6.6-.2z" />
      </svg>
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
      ElysianScriptarium
      </span>
    </>
  ),
  banner: {
    key: '1.0-release',
    text: (
      <a href="https://arweave.org" target="_blank">
        Built with 💜 by the Arweave community. Learn more about Arweave →
      </a>
    )
  },
  project: {
    link: 'https://github.com/Megumiiiiii/elysianscriptarium',
  },
  chat: {
    link: 'https://discordapp.com/users/873803230042263563',
  },
  docsRepositoryBase: 'https://github.com/Megumiiiiii/elysianscriptarium',
  footer: {
    text: 'This is a permapage.',
  },
     
}

export default config
