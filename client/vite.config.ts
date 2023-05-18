import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const DEV_HOST = 'http://43.132.29.158:8080'
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
