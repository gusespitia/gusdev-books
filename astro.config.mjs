// @ts-check
import { defineConfig, envField } from 'astro/config';


import vercel from '@astrojs/vercel';


// https://astro.build/config
// estos nos permiten acceder a las variables de entorno del servidor
export default defineConfig({
  output: 'server',

  env: {
      schema:
      {
          SHOW_BUY_BUTTON: envField.boolean({default: true, context: 'server', access:'public'}),
          SCORE_API_ENDPOINT: envField.string({context: 'server', access:'public' })
      }
  },

  adapter: vercel()
});