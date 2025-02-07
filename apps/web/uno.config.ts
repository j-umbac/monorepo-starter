import { defineConfig } from 'unocss'

import una from '@una-ui/nuxt/una.config'

export default defineConfig({
  /**
   * Add unocss options here
   * 
   * @see https://unocss.dev/guide/config-file
  */

  /**
   * You can add add or override default una-ui presets here,
   * To override default una-ui presets, you can use the same name,
   * If you want to change from static to dynamic or vice versa, you can copy the default preset and change it.
   * 
   * @see https://github.com/una-ui/una-ui/tree/main/packages/preset/src/_shortcuts
   * 
  */
  shortcuts: [
    /**
     * if you want to add new or override static preset, you can add it here
     * 
     * @example: 'btn': 'transition delay-100 ease-in-out bg-transparent text-0.875em leading-5 gap-0.42857142857142855em btn-rectangle rounded-md inline-flex justify-center items-center btn-disabled font-semibold cursor-pointer'
    */
    {
      // add here ...
    },

    /**
     * if you want to add new or override dynamic preset, you can add it here
     * 
     * @example: [/^btn-solid(-(\S+))?$/, ([, , c = 'primary']) => `btn-focus-${c} text-inverted shadow-sm bg-${c}-600 hover:bg-${c}-500 dark:bg-${c}-500 dark:hover:bg-${c}-400`] 
    */
  ],

  // una-ui config
  ...una() as any
})
