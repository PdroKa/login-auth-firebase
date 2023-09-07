import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// export default defineConfig(({mode}) => {
//

// )

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],
    define: {
      __FIREBASE_API_KEY__: JSON.stringify(env.VITE_REACT_APP_FIREBASE_API_KEY),
      __FIREBASE_AUTH_DOMAIN__: JSON.stringify(
        env.VITE_REACT_APP_FIREBASE_AUTH_DOMAIN,
      ),
      __FIREBASE_PROJECT_ID__: JSON.stringify(
        env.VITE_REACT_APP_FIREBASE_PROJECT_ID,
      ),
      __FIREBASE_STORAGE_BUCKET__: JSON.stringify(
        env.VITE_REACT_APP_FIREBASE_STORAGE_BUCKET,
      ),
      __FIREBASE_MESSAGING_SENDER_ID__: JSON.stringify(
        env.VITE_REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
      ),
      __FIREBASE_APP_ID__: JSON.stringify(env.VITE_REACT_APP_FIREBASE_APP_ID),
    },
  }
})
