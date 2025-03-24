// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true, // Si usas styled-components
    reactRemoveProperties: true, // Mejora rendimiento en producción
    removeConsole: process.env.NODE_ENV === 'production', // Elimina consoles en prod
  },
  experimental: {
    swcPlugins: [
      // Si necesitas plugins adicionales
      ['@swc/plugin-styled-components', { displayName: true }]
    ],
  },
};

export default nextConfig;
