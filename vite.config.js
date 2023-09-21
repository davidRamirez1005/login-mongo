
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
// https://vitejs.dev/config/

const env = loadEnv("development", process.cwd(), 'VITE')
console.log(env);
export default defineConfig({
  plugins: [react()],
  resolve: {
        alias: {
          '@': '/src' // Alias para el prefijo @
        }
  },
  server:{
    port: env.VITE_PORT_FRONTEND,
    host: env.VITE_HOSTNAME,
  }
})
