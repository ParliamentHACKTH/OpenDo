import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import {BootstrapVueNextResolver} from 'unplugin-vue-components/resolvers'
import dotenv from 'dotenv'

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig(() => {
    return {
        plugins: [
            vue(),
            Components({
                resolvers: [BootstrapVueNextResolver()],
            }),
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        },
        // eslint-disable-next-line no-undef
        base: `${process.env.BASE_URL}`,
        css: {
            preprocessorOptions: {
                scss: {
                    quietDeps: true
                }
            }
        },
        json: {
            stringify: true
        }
    }
})
