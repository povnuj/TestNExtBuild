/** @type {import('next').NextConfig} */
import CompressionPlugin from 'compression-webpack-plugin';

const nextConfig = {
  swcMinify: true,
 
  output: 'standalone',
  //distDir: 'dist',
 // output: 'export',

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'diameb.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'test-og-next.netlify.app',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },

  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     config.resolve.fallback.fs = false; // Виключення модуля 'fs' на клієнтській стороні
  //   }

  //   // Додавання компресії Brotli
  //   config.plugins.push(new CompressionPlugin({
  //     filename: '[path][base].br',
  //     algorithm: 'brotliCompress',
  //     test: /\.(js|css|html|svg)$/,
  //     compressionOptions: { level: 11 },
  //     threshold: 10240,
  //     minRatio: 0.8,
  //     deleteOriginalAssets: false,
  //   }));

  //   return config;
  // },
  

 // Оптимізація кешування і служби доставки контенту
  async headers() {
   return [
     {
       source: '/(.*)',
       headers: [
         {
           key: 'Cache-Control',
           value: 'public, max-age=31536000, immutable', 
         },
         {
           key: 'Content-Security-Policy',
           value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'", // Політика безпеки контенту
         },
         {
           key: 'X-Content-Type-Options',
           value: 'nosniff',
         },
         {
           key: 'X-Frame-Options',
           value: 'DENY',
         },
         {
           key: 'X-XSS-Protection',
           value: '1; mode=block',
         },
       ],
     },
   ];
  },
  env: {
    
  },

 
  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,
 
  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,
 
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
 

};

export default nextConfig;
