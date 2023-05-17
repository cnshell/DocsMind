import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const DEV_HOST = 'http://10.16.32.19:5000'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/api': {
                target: DEV_HOST,
                changeOrigin: true
            },
            '/static': {
                target: DEV_HOST,
                changeOrigin: true
            }
        }
    }
})
