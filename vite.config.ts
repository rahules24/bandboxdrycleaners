import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/bandboxdrycleaners/'  // add this line, replace YOUR_REPO with your actual repo name
})
