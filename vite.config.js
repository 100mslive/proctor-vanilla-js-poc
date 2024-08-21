import { viteStaticCopy } from 'vite-plugin-static-copy';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
      viteStaticCopy({
        targets: [
          {
            src: 'proctor.html',
            dest: '.'
          },
        ],
      }),
    ],
   define: {
    'process.env': process.env,
  },
});