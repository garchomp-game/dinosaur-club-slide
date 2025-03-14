import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/dinosaur-club-slide/', // GitHub Pagesのリポジトリ名
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  // デバッグ用にビルドログを詳細に出力
  build: {
    minify: 'terser',
    sourcemap: true,
  },
  // 開発サーバーの設定
  server: {
    port: 3000,
    open: true,
    // コンソールに詳細なログを出力
    hmr: {
      overlay: true
    }
  }
})
