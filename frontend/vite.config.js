import { defineConfig } from 'vite';
//import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()]
  
  
}

  // tailwindcss()],
 )

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       '/predict': 'http://localhost:10000',
//     }
//   }
// });
