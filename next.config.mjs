/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
    basePath: isProd ? '/Portofolio-Website' : '',
    assetPrefix: isProd ? '/Portofolio-Website/' : '',
    output: 'export',
    images: {
        unoptimized: true,
    },
    distDir: 'out',
}; 

export default nextConfig;
