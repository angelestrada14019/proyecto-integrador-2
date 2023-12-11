/** @type {import('next').NextConfig} */

const nextConfig = {
    transpilePackages: ['@mui/x-charts'],
    reactStrictMode: true,
    swcMinify: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 's3.us-east-1.amazonaws.com',
                port: '',
                pathname: '/eventify-bucket/**',
            },
            {
                protocol: 'https',
                hostname: 's3-pi2-gp2-wowfunding.s3.amazonaws.com',
                port: '',
                pathname: '/**',
            }
        ],
    },
    //
    // Note: configuring pageExtensions also affects _document.js, _app.js,
    // middleware.js as well as files under pages/api/.
    // For example, setting pageExtensions: ['page.tsx', 'page.ts']
    // means the following files: _document.tsx, _app.tsx, middleware.ts, pages/users.tsx and pages/api/users.ts
    // will have to be renamed to _document.page.tsx, _app.page.tsx, middleware.route.ts, pages/users.page.tsx
    // and pages/api/users.page.ts respectively.
    pageExtensions: ['page.tsx', 'page.ts', 'route.tsx', 'route.ts'],

}

module.exports = nextConfig
