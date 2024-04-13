import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/employee-dashboard-react-app-m02-nyit",
  plugins: [react()],
})
