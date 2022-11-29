import { App } from "vue"
import TheButton from '/@/components/TheButton.vue'

export interface PluginOptions {
 /*   components : string[] */
}

export interface TresPlugin {
    [key: string]: any
    install: (app: App, options?: PluginOptions) => void
}

const plugin: TresPlugin = {
    install(app: App, options) {
        app.component('TheButton', TheButton)
    },
  }
  
  export default plugin