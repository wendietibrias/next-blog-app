/** @type {import('next').NextConfig} */
const nextConfig = {
     output:"export",
     distDir:".next",
     images: {
      domains: ['media.graphassets.com'],
      unoptimized:true
    },
}

module.exports = nextConfig
