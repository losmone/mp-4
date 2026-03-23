/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // Cela active le support de styled-components pour le SSR
    styledComponents: true,
  },
};

export default nextConfig;