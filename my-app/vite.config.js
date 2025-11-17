import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   host: true, // Isso permite conexões externas via IP
  //   port: 5174, // Opcional, mas bom para garantir a porta
  // }
})

